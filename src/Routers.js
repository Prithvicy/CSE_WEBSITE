import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Body from "./Components/Body";
import Header from "./Components/Header";
import Career from "./Pages/Career";
import Faculty from "./Pages/Faculty";
import Research from "./Pages/Research";
import Student from "./Pages/Student";
import StudentChapter from "./Pages/StudentChapter";
import Testimonials from "./Pages/Testimonials";

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
          path="/Home"
          element={
            <>
              <Header />
              <Body />
            </>
          }
        />
        <Route
          exact
          path="/faculty"
          element={
            <>
              <Header />
              <Faculty />
            </>
          }
        />
        <Route
          exact
          path="/research"
          element={
            <>
              <Research />
            </>
          }
        />

        <Route
          exact
          path="/students"
          element={
            <>
              <Header />
              <Student />
            </>
          }
        />
        <Route
          exact
          path="/career"
          element={
            <>
              <Header />
              <Career />
            </>
          }
        />
        <Route
          exact
          path="/studentChapter"
          element={
            <>
              <Header />
              <StudentChapter />
            </>
          }
        />
        <Route
          exact
          path="/testemonials"
          element={
            <>
              <Header />
              <Testimonials />
            </>
          }
        />
      </Routes>
    </Router>
  );
};

export default Routers;
