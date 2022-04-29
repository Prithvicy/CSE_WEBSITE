import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Body from "./Components/Body";
import Header from "./Components/Header";

const Routers = () => {
    return (
        <Router>
            <Routes>
                <Route
                    exact
                    path="/"
                    element={
                        <>
                            <Header />
                            <Body />
                        </>
                    }
                />
                <Route
                    exact
                    path="/AboutUs"
                    element={
                        <>
                            <Header />
                        </>
                    }
                />
            </Routes>
        </Router>
    );
};

export default Routers;
