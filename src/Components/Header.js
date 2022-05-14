import React from "react";
import "./Header.css";
import logo from "../Assets/logoDummy.png";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="header">
      <div className="header1" id="myHeader">
        <Link to="/" className="logo">
          <img src={logo} alt="" />
        </Link>
        <div className="header__items">
      
        <Link to="/regulations">
          <span>Curriculum Regulations</span>
        </Link>
        <Link to="/faculty">
          <span className="headbut">Faculty</span>
        </Link>
        <Link to="/research">
          <span>Research</span>
        </Link>
        <Link to="/infrastructure">
          <span>Infrastructure</span>
        </Link>
        <Link to="/testimonial">
          <span>Testimonials</span>
        </Link>
        <Link to="/p">
          <span>PEO and PSO</span>
        </Link>
        </div>

      </div>
      <div className="header2">
        <Link to="/placemenets">
          <span>Placements</span>
        </Link>
        <Link to="/hstudies">
          <span>Higher Studies</span>
        </Link>
        <Link to="/rholders">
          <span>Rank Holders </span>
        </Link>
        <Link to="/students">
          <span>Students </span>
        </Link>
        <Link to="/ealumni">
          <span>Elite Alumni </span>
        </Link>
        <Link to="/chapter">
          <span>Chapter</span>
        </Link>
        <Link to="/club">
          <span>Club </span>
        </Link>
        <Link to="/bmembers">
          <span>bos members</span>
        </Link>
      </div>
    </div>
  );
};

export default Header;
