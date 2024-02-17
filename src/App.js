import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Signup from "./components/signup/Signup";
import Signin from "./components/signin/Signin";
import Discover from "./components/home/Discover";
import RequestProduct from "./components/request/RequestProduct";
import Profile from "./components/profile/Profile";
import Notifications from "./components/notifications/Notifications";
import Post from "./components/post/Post";
import Messages from "./components/messages/Messages";
import BaseLayout from "./BaseLayout";
import Error from "./Error";

export const routes = [
    { path: "/", element: <Signin /> },
    { path: "/signin", element: <Signin /> },
    { path: "/signup", element: <Signup /> },
    { path: "/home", element: <Discover /> },
    { path: "/request", element: <RequestProduct /> },
    { path: "/profile", element: <Profile /> },
    { path: "/notifications", element: <Notifications /> },
    { path: "/post", element: <Post /> },
    { path: "/messages", element: <Messages /> },
    { path: "*", element: <Error /> },
];

function App() {
    return (
        <Router>
            <BaseLayout>
                <Routes>
                    {routes.map((route, index) => (
                        <Route
                            key={index}
                            path={route.path}
                            element={route.element}
                        />
                    ))}
                </Routes>
            </BaseLayout>
        </Router>
    );
}

export default App;
