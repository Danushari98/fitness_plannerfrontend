import React from "react";

import {
  FaMapMarkerAlt,
  FaEnvelope,
  FaInstagram,
} from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";   // ✅ X icon
import "./Footer.css";
import logo from "../assets/logo.png";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        {/* LEFT - LOGO & GYM NAME */}
        <div className="footer-box">
          <div className="footer-brand">
            <img src={logo} alt="Gym Logo" className="footer-logo-img" />
            <h2>
              APEX <span>STRENGTH CLUB</span>
            </h2>
          </div>

          <p className="footer-mail">
            <FaEnvelope /> apexstrengthclub@gmail.com
          </p>
        </div>

        {/* CENTER - CLUB LOCATIONS */}
        <div className="footer-box">
          <h3>OUR CLUBS</h3>

          <p>
            <FaMapMarkerAlt /> Coimbatore
          </p>
          <ul className="address-list">
            <li>
              Aruna Sarasu Complex, Bus Stop, Marudhamalai Road, Vadavalli,
              Coimbatore-641041, Tamil Nadu
            </li>
            <li>
              9/56A Kulathupalayam Road, Near Balu Avenue, B K Pudur,
              Coimbatore-641008
            </li>
          </ul>

          <p>
            <FaMapMarkerAlt /> Erode
          </p>
          <ul className="address-list">
            <li>
              No 12, V M K Complex, VOC Park Road, Mettupalayam Road,
              Erode-638009
            </li>
            <li>
              NGS Complex Ground Floor, Erode Road, Sathyamangalam-638401
            </li>
          </ul>
        </div>

        {/* RIGHT - FOLLOW US */}
        <div className="footer-box">
          <h3>FOLLOW US</h3>

          <div className="social-icons">
            <a href="#">
              <FaInstagram />
            </a>
            <a href="#">
              <FaXTwitter />   {/* ✅ X icon */}
            </a>
          </div>
        </div>
      </div>

      {/* BOTTOM */}
      <div className="footer-bottom">
        <p>© 2025 Apex Strength Club | All Rights Reserved</p>
      </div>
    </footer>
  );
}
