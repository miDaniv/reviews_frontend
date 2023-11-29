import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
// import {
//   createBrowserRouter,
//   createRoutesFromElements,
//   Route,
//   Link,
//   RouterProvider,
//   Outlet,
// } from "react-router-dom";
import Home from './Home';
import Login from './login';
import Register from './Register';
import User, {userLoader} from './User';
import Users, {dataLoader} from './Users';
import AddFilm from './AddFilm';
import FilmInfo from './FilmInfo';
import ReloadOnRouteChange from './ReloadOnRouteChange';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/film-info/:id" element={<FilmInfo />} />
      </Routes>
    </BrowserRouter>
  );
};

// const Layout = () => {
//   return (
//     <>
//       <Link to="/home">Home</Link>
//       <Link to="/user">Users</Link>
//       <div>
//         <Outlet />
//       </div>
//     </>
//   );
// };

// const router = createBrowserRouter(
//   createRoutesFromElements(
//     <Route path="/" element={<Layout />}>
//       <Route index path="/home" element={<Home />} />
//       <Route path="/user" element={<Users />} loader={dataLoader} />
//       <Route path="/user/:id" element={<User />} loader={userLoader} />
//     </Route>
//   )
// );

// // const App = () => {
// //   return (
// //     <Router>
// //       <Routes>
// //         <Route path="/" element={<Home />} />
// //         <Route path="/login" element={<Login />} />
// //         <Route path="/register" element={<Register />} />
// //         <Route path="/user/:id" element={<User />} loader={userLoader} />
// //           {/* <Route
// //             index
// //             element={<UserProfile />}
// //             loader={userPageLoader}
// //         /> */}
// //         <Route path="/add-film" element={<AddFilm />} />
// //         <Route path="/film-info" element={<FilmInfo />} />
// //       </Routes>
// //     </Router>
// //   );
// // };

// const Navigation = () => {
//   return (
//     <div>
//       <Link to="/">Home</Link>
//       <Link to="/about">About</Link>
//     </div>
//   );
// };

// const App = () => {
//   return (
//     // <BrowserRouter>
//     <BrowserRouter>
//     <div>
//       <RouterProvider router={router} />
//     </div>
//     </BrowserRouter>
//   );
// };

export default App;