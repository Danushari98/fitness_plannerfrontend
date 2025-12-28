import React from "react";
import { useNavigate } from "react-router-dom";
import "./WhyJoin.css";

export default function WhyJoin() {
  const navigate = useNavigate();

  const goToMembership = () => {
    navigate("/membership");
  };

  return (
    <div className="WhyJoin-page">

      {/* ===== HERO SECTION WITH BG IMAGE ===== */}
      <section className="WhyJoin-hero">
        <div className="overlay"></div>

        <div className="content">
          <h1>Why Join Our Fitness Club?</h1>
          <p>
            World-class training, premium equipment, dedicated coaching, and a community 
            that motivates you every day.
          </p>
        </div>
      </section>

      {/* ===== 2 × 2 FEATURES GRID ===== */}
      <section className="why-join-grid">

        <div className="box">
          <img src="https://cdn-icons-png.flaticon.com/512/4087/4087840.png" alt="" />
          <h3>Support</h3>
          <p>Certified trainers, customised routines & complete guidance.</p>
        </div>

        <div className="box">
          <img src="https://cdn-icons-png.flaticon.com/512/3194/3194764.png" alt="" />
          <h3>Tools & Training</h3>
          <p>Premium equipment, strength zones & group workout rooms.</p>
        </div>

        <div className="box">
          <img src="https://cdn-icons-png.flaticon.com/512/1828/1828884.png" alt="" />
          <h3>Convenience</h3>
          <p>24/7 access, easy location, high-quality facilities.</p>
        </div>

        <div className="box">
          <img src="https://cdn-icons-png.flaticon.com/512/1256/1256650.png" alt="" />
          <h3>Community</h3>
          <p>Be part of a motivating fitness family.</p>
        </div>

      </section>

      {/* ===== ENQUIRE BUTTON ===== */}
      <div className="enquire-wrapper">
        <button className="enquire-btn" onClick={goToMembership}>
          Enquire About Gym Membership Now
        </button>
      </div>

    </div>
  );
}
