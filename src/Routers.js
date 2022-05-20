import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Body from "./Components/Body";
import Header from "./Components/Header";
import HeaderMoba from "./Components/HeaderMoba";
import Career from "./Pages/Career";
import StudentChapter from "./Pages/StudentChapter";

import PeoAndPso from "./Pages/PeoAndPso";
import Regulations from "./Pages/Regulations";
import Faculty from "./Pages/Faculty";
import Stafforfaculty from "./Pages/faculty/Stafforfaculty";
import Mentor from "./Pages/faculty/Mentor";
import Studentwelfarecommittee from "./Pages/faculty/Studentwelfarecommittee";

import Research from "./Pages/Research";
import Supervisors from "./Pages/research/Supervisors";
import Phdawardedfaculty from "./Pages/research/Phdawardedfaculty";
import Scholars from "./Pages/research/Scholars";
import Projects from "./Pages/research/Projects";
import Patents from "./Pages/research/Patents";
import Publications from "./Pages/research/Publications";

import Infrastructure from "./Pages/Infrastructure";
import Testimonials from "./Pages/Testimonials";
import Placemenets from "./Pages/Placemenets";
import Higherstudies from "./Pages/Higherstudies";
import Rankholders from "./Pages/Rankholders";
import Student from "./Pages/Student";
import Achievements from "./Pages/students/Achievements";
import Guestlecture from "./Pages/students/Guestlecture";
import Workshop from "./Pages/students/Workshop";
import Industrialvisit from "./Pages/students/Industrialvisit";
import Valueaddedcourse from "./Pages/students/Valueaddedcourse";
import Projectexpo from "./Pages/students/Projectexpo";
import Socialprograms from "./Pages/students/Socialprograms";
import Excelinsports from "./Pages/students/Excelinsports";

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
          path="/research/supervisors"
          element={
            <>
              <HeaderMoba />
              <Header />
              <Supervisors />
            </>
          }
        />
        <Route
          exact
          path="/research/phdawardedfaculty"
          element={
            <>
              <HeaderMoba />
              <Header />
              <Phdawardedfaculty />
            </>
          }
        />
        <Route
          exact
          path="/research/scholars"
          element={
            <>
              <HeaderMoba />
              <Header />
              <Scholars />
            </>
          }
        />
        <Route
          exact
          path="/research/projects"
          element={
            <>
              <HeaderMoba />
              <Header />
              <Projects />
            </>
          }
        />
        <Route
          exact
          path="/research/patents"
          element={
            <>
              <HeaderMoba />
              <Header />
              <Patents />
            </>
          }
        />
        <Route
          exact
          path="/research/publications"
          element={
            <>
              <HeaderMoba />
              <Header />
              <Publications />
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
          path="/faculty/stafforfaculty"
          element={
            <>
              <HeaderMoba />
              <Header />
              <Stafforfaculty />
            </>
          }
        />
        <Route
          exact
          path="/faculty/mentor"
          element={
            <>
              <HeaderMoba />
              <Header />
              <Mentor />
            </>
          }
        />
        <Route
          exact
          path="/faculty/studentwelfarecommittee"
          element={
            <>
              <HeaderMoba />
              <Header />
              <Studentwelfarecommittee />
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
          path="/students/achievements"
          element={
            <>
              <HeaderMoba />
              <Header />
              <Achievements />
            </>
          }
        />
        <Route
          exact
          path="/students/guestlecture"
          element={
            <>
              <HeaderMoba />
              <Header />
              <Guestlecture />
            </>
          }
        />
        <Route
          exact
          path="/students/workshop"
          element={
            <>
              <HeaderMoba />
              <Header />
              <Workshop />
            </>
          }
        />
        <Route
          exact
          path="/students/industrialvisit"
          element={
            <>
              <HeaderMoba />
              <Header />
              <Industrialvisit />
            </>
          }
        />
        <Route
          exact
          path="/students/valueaddedcourse"
          element={
            <>
              <HeaderMoba />
              <Header />
              <Valueaddedcourse />
            </>
          }
        />
        <Route
          exact
          path="/students/projectexpo"
          element={
            <>
              <HeaderMoba />
              <Header />
              <Projectexpo />
            </>
          }
        />
        <Route
          exact
          path="/students/socialprograms"
          element={
            <>
              <HeaderMoba />
              <Header />
              <Socialprograms />
            </>
          }
        />
        <Route
          exact
          path="/students/excelinsports"
          element={
            <>
              <HeaderMoba />
              <Header />
              <Excelinsports />
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
