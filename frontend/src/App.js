import "./App.css";
import axios from 'axios';
import React, {useState, useEffect} from "react";
import { createBrowserRouter, RouterProvider, Navigate } from "react-router-dom";
import TutorLogin from "./components/TutorLogin";
import TutorRegister from "./components/TutorRegister";
import LoginPage from "./components/LoginPage";
import UserLogin from "./components/UserLogin";
import UserRegister from "./components/UserRegister";
import HomePage from "./components/HomePage";


const PrivateRoute = ({ element, isLoggedIn }) => {
  console.log(isLoggedIn);
  return isLoggedIn ? element : <Navigate to="/" />;
};

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

    useEffect(() => {
        const token = localStorage.getItem('token');
        if (token) {
            axios
                .get('/api/protected', {
                    headers: {  Authorization: `Bearer ${token}`  },
                })
                .then(() => setIsLoggedIn(true))
                .catch(() => setIsLoggedIn(false));
        }
    }, []);

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
        element: <UserLogin setIsLoggedIn={setIsLoggedIn} />,
      },
      {
        path: '/register',
        element: <UserRegister />,
      },
      {
        path: '/authTrue',
        element: <PrivateRoute element={<HomePage/>} isLoggedIn={isLoggedIn} />,
      },
    ]);
    

    return (
      <>
        <RouterProvider router={router} />
      </>
    );
}
export default App;
