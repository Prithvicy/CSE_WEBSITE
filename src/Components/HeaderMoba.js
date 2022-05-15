import React from "react";
import "./HeaderMoba.css";
import { Link } from "react-router-dom";

// comment Header in Routers.js
// to see mobile view of header

const HeaderMoba = () => {
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
            <Link to='/p' className="nav__list-item">
              <span>PEO and PSO</span>
            </Link>
            <Link to='/' className="nav__list-item">
              <span>Testimonials</span>
            </Link>
            <Link to='/' className="nav__list-item">
              <span>Infrastructure</span>
            </Link>
            <Link to='/' className="nav__list-item">
              <span>Research</span>
            </Link>
            <Link to='/' className="nav__list-item">
              <span>Faculty</span>
            </Link>
            <Link to='/' className="nav__list-item">
              <span>Curriculum Regulations</span>
            </Link>
            <Link to='/' className="nav__list-item">
              <span>Placements</span>
            </Link>
            <Link to='/' className="nav__list-item">
              <span>Higher Studies</span>
            </Link>
            <Link to='/' className="nav__list-item">
              <span>Rank Holders </span>
            </Link>
            <Link to='/' className="nav__list-item">
              <span>Students </span>
            </Link>
            <Link to='/' className="nav__list-item">
              <span>Elite Alumni </span>
            </Link>
            <Link to='/' className="nav__list-item">
              <span>Chapter</span>
            </Link>
            <Link to='/' className="nav__list-item">
              <span>Club </span>
            </Link>
            <Link to='/' className="nav__list-item">
              <span>bos members</span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

const bodyAddClass = () => {
  console.log('menu clicked')
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
export default HeaderMoba;
