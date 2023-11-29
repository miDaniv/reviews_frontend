import { useLoaderData } from "react-router-dom";

const api = "http://localhost:8080/api/user";

export const userLoader = async ({ params }) => {
  const res = await fetch(`${api}/${params.id}`);
  const resJson = await res.json();

  return resJson;
};

const User = () => {
  const result = useLoaderData();
  return (
    <div>
      <h1>
        {result.Id} - {result.Name}
      </h1>
    </div>
  );
};

export default User;
