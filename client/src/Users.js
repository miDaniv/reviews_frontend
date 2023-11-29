import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { baseUrl } from './shared';
import useFetch from './UseFetch';

export default function Users() {
    //const [customers, setCustomers] = useState();
    const [show, setShow] = useState(false);

    function toggleShow() {
        setShow(!show);
    }

    const url = baseUrl + 'users';
    // const res = await fetch(url);
    // const customers = await res.json();
  
    const {
        request,
        appendData,
        data: { customers } = {},
        errorStatus,
    } = useFetch(url, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
        },
    });

    useEffect(() => {
        request();
    });

    //useEffect(() => {
    //    console.log(request, appendData, customers, errorStatus);
    //});

    function newCustomer(name, industry) {
        appendData({ name: name, industry: industry });

        if (!errorStatus) {
            toggleShow();
        }
    }

    return (
        <>
            <h1>Here are our users:</h1>
            {customers
                ? customers.map((user) => {
                      return (
                          <div className="m-2" key={user.Id}>
                              <Link to={'/users/' + user.Id}>
                                  <button className="no-underline bg-purple-600 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded">
                                      {user.Name}
                                  </button>
                              </Link>
                          </div>
                      );
                  })
                : null}
        </>
    );
}
