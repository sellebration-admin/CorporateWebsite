import React from "react";
import HomePage from "./pages/HomePage/HomePage";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import LanguageChoosingPage from "./pages/LanguageChoosingPage/LanguageChoosingPage";
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
