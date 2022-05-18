import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Body from "./Components/Body";
import Header from "./Components/Header";
import HeaderMoba from "./Components/HeaderMoba";
import Career from "./Pages/Career";
import StudentChapter from "./Pages/StudentChapter";

import PeoAndPso from "./Pages/PeoAndPso";
import Testimonials from "./Pages/Testimonials";
import Infrastructure from "./Pages/Infrastructure";
import Research from "./Pages/Research";
import Faculty from "./Pages/Faculty";
import Regulations from "./Pages/Regulations";
import Placemenets from "./Pages/Placemenets";
import Higherstudies from "./Pages/Higherstudies";
import Rankholders from "./Pages/Rankholders";
import Student from "./Pages/Student";
import Elitealumni from "./Pages/Elitealumni";
import Chapter from "./Pages/Chapter";
import Club from "./Pages/Club";
import Bosmembers from "./Pages/Bosmembers";

const Routers = () => {
  return (
    <Router>
      <Routes>
        <Route
          exact
          path="/"
          element={
            <>
              <HeaderMoba />
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
              <HeaderMoba />
              <Header />
              <Body />
            </>
          }
        />
        <Route
          exact
          path="/peoandpso"
          element={
            <>
              <HeaderMoba />
              <Header />
              <PeoAndPso />
            </>
          }
        />
        <Route
          exact
          path="/testimonials"
          element={
            <>
              <HeaderMoba />
              <Header />
              <Testimonials />
            </>
          }
        />
        <Route
          exact
          path="/infrastructure"
          element={
            <>
              <HeaderMoba />
              <Header />
              <Infrastructure />
            </>
          }
        />
        <Route
          exact
          path="/research"
          element={
            <>
              <HeaderMoba />
              <Header />
              <Research />
            </>
          }
        />
        <Route
          exact
          path="/faculty"
          element={
            <>
              <HeaderMoba />
              <Header />
              <Faculty />
            </>
          }
        />
        <Route
          exact
          path="/regulations"
          element={
            <>
              <HeaderMoba />
              <Header />
              <Regulations />
            </>
          }
        />
        <Route
          exact
          path="/placemenets"
          element={
            <>
              <HeaderMoba />
              <Header />
              <Placemenets />
            </>
          }
        />
        <Route
          exact
          path="/higherstudies"
          element={
            <>
              <HeaderMoba />
              <Header />
              <Higherstudies />
            </>
          }
        />
        <Route
          exact
          path="/rankholders"
          element={
            <>
              <HeaderMoba />
              <Header />
              <Rankholders />
            </>
          }
        />
        <Route
          exact
          path="/students"
          element={
            <>
              <HeaderMoba />
              <Header />
              <Student />
            </>
          }
        />
        <Route
          exact
          path="/elitealumni"
          element={
            <>
              <HeaderMoba />
              <Header />
              <Elitealumni />
            </>
          }
        />
        <Route
          exact
          path="/chapter"
          element={
            <>
              <HeaderMoba />
              <Header />
              <Chapter />
            </>
          }
        />
        <Route
          exact
          path="/club"
          element={
            <>
              <HeaderMoba />
              <Header />
              <Club />
            </>
          }
        />
        <Route
          exact
          path="/bosmembers"
          element={
            <>
              <HeaderMoba />
              <Header />
              <Bosmembers />
            </>
          }
        />
        <Route
          exact
          path="/career"
          element={
            <>
              <HeaderMoba />
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
              <HeaderMoba />
              <Header />
              <StudentChapter />
            </>
          }
        />
      </Routes>
    </Router>
  );
};

export default Routers;
