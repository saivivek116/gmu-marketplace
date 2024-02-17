import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Signup from "./components/signup/Signup";
import Signin from "./components/signin/Signin";
import Discover from "./components/home/Discover";
import RequestProduct from "./components/request/RequestProduct";
// import Message from "./components/messages/Messages.js";
import Profile from "./components/profile/Profile";

// Import the Registration component if you have one

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Signup />} />{" "}
                {/* Set Login as the default route */}
                <Route path="/signin" element={<Signin />} />
                <Route path="/signup" element={<Signup />} />{" "}
                {/* Include Registration route if exists */}
                {/* You can add more routes here as needed */}
                <Route path="/home" element={<Discover />} />
                <Route path="/request" element={<RequestProduct />} />
                <Route path="/profile" element={<Profile />} />
            </Routes>
        </Router>
    );
}

export default App;
