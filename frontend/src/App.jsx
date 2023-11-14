import React from "react";
import HomePage from "./pages/HomePage/HomePage";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import LanguageChoosingPage from "./pages/LanguageChoosingPage/LanguageChoosingPage";
import SinglePostPage from "./pages/SinglePostPage/SinglePostPage";
import AddAPostPage from "./pages/AddAPostPage/AddAPostPage";
import AllPostsPage from "./pages/AllPostsPage/AllPostsPage";
import Login from "./pages/Login/Login";
import AdminPanelPage from "./pages/AdminPanelPage/AdminPanelPage";
import Register from "./pages/Register/Register";
const App = () => {
  const Layout = () => {
    return (
      <div className="app">
        <Outlet />
      </div>
    );
  };
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          path: "/",
          element: <LanguageChoosingPage />,
        },
        {
          path: "/index",
          element: <HomePage />,
        },
        {
          path: "/post/:id",
          element: <SinglePostPage />,
        },
        {
          path: "/addpost",
          element: <AddAPostPage />,
        },
        {
          path: "/posts",
          element: <AllPostsPage />,
        },
        {
          path: "/login",
          element: <Login />,
        },
        {
          path: "/register",
          element: <Register />,
        },
        {
          path: "/admin",
          element: <AdminPanelPage />,
        },
      ],
    },
  ]);
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
};

export default App;
