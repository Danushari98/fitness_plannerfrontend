import React from "react";
import { NavLink } from "react-router-dom";
import "./Navbar.css";

export default function Navbar() {
  return (
    <>
      {/* TOP LOGO CENTER */}
      <div className="top-logo-bar">
        <img src="/R.png" alt="logo" className="top-logo" />
        <h1 className="top-title">APEX STRENGTH CLUB</h1>
      </div>

      <nav className="navbar">
        <ul className="nav-links">
          <li><NavLink to="/" end>HOME</NavLink></li>
          <li><NavLink to="/Workouts">WORKOUTPROGRAMS</NavLink></li>
          <li><NavLink to="/why-join">WHYJOIN</NavLink></li>
          <li><NavLink to="/about">ABOUT US</NavLink></li>
          <li><NavLink to="/news">NEWS</NavLink></li>
          <li><NavLink to="/contact">CONTACT</NavLink></li>
          <li><NavLink to="/bmi">BMI CALCULATOR</NavLink></li>
        </ul>

        <div className="nav-right">
          <NavLink to="/membership">
            <button className="join-btn">MEMBERSHIP</button>
          </NavLink>

          {/* CALL BUTTON */}
          <a href="tel:+345867788892">
            <button className="call-btn">
              CALL: +34 586 778 8892
            </button>
          </a>
        </div>
      </nav>
    </>
  );
}
