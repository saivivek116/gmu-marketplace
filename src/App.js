import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Signup from "./components/signup/Signup";
import Signin from "./components/signin/Signin";
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
            </Routes>
        </Router>
    );
}

export default App;
