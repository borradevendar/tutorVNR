import "./App.css";
import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import TutorLogin from "./components/TutorLogin";
import TutorRegister from "./components/TutorRegister";
import LoginPage from "./components/LoginPage";
import UserLogin from "./components/UserLogin";
import UserRegister from "./components/UserRegister";
import HomePage from "./components/HomePage";

const router = createBrowserRouter([
  {
    path: '/',
    element: <LoginPage />,
  },
  {
    path: '/tutor/login',
    element: <TutorLogin />,
  },
  {
    path: '/tutor/register',
    element: <TutorRegister />,
  },
  {
    path: '/login',
    element: <UserLogin />,
  },
  {
    path: '/register',
    element: <UserRegister />,
  },
  {
    path: '/authTrue',
    element: <HomePage />,
  },
]);

function App() {
    return (
      <>
        <RouterProvider router={router} />
      </>
    );
}
export default App;
