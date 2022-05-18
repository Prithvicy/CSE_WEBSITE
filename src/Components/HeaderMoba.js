import React from "react";
import "./HeaderMoba.css";
import { Link } from "react-router-dom";
import Dropdown from "./Dropdown";

const HeaderMoba = () => {
  React.useEffect(() => {
    window.addEventListener('load', closeNav());
  });
  return (
    <div>
      <span onClick={bodyAddClass}>
        <div className="menu-icon">
          <span className="menu-icon__line menu-icon__line-left"></span>
          <span className="menu-icon__line"></span>
          <span className="menu-icon__line menu-icon__line-right"></span>
        </div>
      </span>
      <div className="nav" id='nav'>
        <div className="nav__content">
          <div className="nav__list">
            <Link to='/peoandpso' className="nav__list-item">
              <span>PEO and PSO</span>
            </Link>
            <span className="nav__list-item"><Dropdown data={dropdownH[0]} /></span>
            <Link to='/testimonials' className="nav__list-item">
              <span>Testimonials</span>
            </Link>
            <Link to='/infrastructure' className="nav__list-item">
              <span>Infrastructure</span>
            </Link>
            <Link to='/research' className="nav__list-item">
              <span>Research</span>
            </Link>
            <Link to='/faculty' className="nav__list-item">
              <span>Faculty</span>
            </Link>
            <Link to='/regulations' className="nav__list-item">
              <span>Curriculum Regulations</span>
            </Link>
            <Link to='/placemenets' className="nav__list-item">
              <span>Placements</span>
            </Link>
            <Link to='/higherstudies' className="nav__list-item">
              <span>Higher Studies</span>
            </Link>
            <span className="nav__list-item"><Dropdown data={dropdownH[1]} /></span>
            <Link to='/rankholders' className="nav__list-item">
              <span>Rank Holders </span>
            </Link>
            <Link to='/students' className="nav__list-item">
              <span>Students </span>
            </Link>
            <Link to='/elitealumni' className="nav__list-item">
              <span>Elite Alumni </span>
            </Link>
            <Link to='/chapter' className="nav__list-item">
              <span>Chapter</span>
            </Link>
            <Link to='/club' className="nav__list-item">
              <span>Club </span>
            </Link>
            <Link to='/bosmembers' className="nav__list-item">
              <span>bos members</span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

const bodyAddClass = () => {
  let body = document.querySelector('body');
  if (body.classList.contains('nav-active')) {
    body.classList.remove('nav-active');
    document.getElementById('nav').style.zIndex = '-1';
  }
  else {
    body.classList.add('nav-active');
    document.getElementById('nav').style.zIndex = '1';
  }
}

const closeNav = () => {
  let body = document.querySelector('body');
  if (body.classList.contains('nav-active')) {
    body.classList.remove('nav-active');
    document.getElementById('nav').style.zIndex = '-1';
  }
}

const dropdownH = [
  {
    heading: "Dropdown 1",
    subInfo: [
      ["subheading1", "/link1"],
      ["subheading2", "/link2"],
      ["subheading3", "/link2"],
      ["subheading4", "/link4"],
    ]
  },
  {
    heading: "Dropdown 2",
    subInfo: [
      ["subheading1", "/link1"],
      ["subheading2", "/link2"],
      ["subheading3", "/link2"],
      ["subheading4", "/link4"],
    ]
  },
];
export default HeaderMoba;
