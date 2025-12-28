import React from "react";
import { Link } from "react-router-dom";
import "./Home.css";

export default function Home() {
  return (
    <div className="home-container">
      {/* HERO SECTION */}
      <section className="hero-section">

        {/* LEFT CONTENT ONLY */}
        <div className="hero-left">
          <p className="welcome-text">WELCOME TO GYM MANIA</p>

          <h1 className="hero-title">
            Build Your Perfect <br />
            Body Shape
          </h1>

          <p className="hero-desc">
            Join our fitness community and start your transformation journey.
            Professional trainers, modern equipment, personalized workouts and 
            diet plans — everything you need to achieve your fitness goals.
          </p>

          <div className="hero-buttons">
            <Link to="/join">
              <button className="btn-primary">JOIN NOW</button>
            </Link>

            <Link to="/about">
              <button className="btn-outline">LEARN MORE</button>
            </Link>
          </div>

          {/* STATS SECTION */}
          <div className="stats">
            <div className="stat-item">
              <h2>450+</h2>
              <p>Happy Members</p>
            </div>

            <div className="stat-item">
              <h2>72+</h2>
              <p>Expert Trainers</p>
            </div>

            <div className="stat-item">
              <h2>150+</h2>
              <p>Workout Plans</p>
            </div>
          </div>
        </div>

      </section>
    </div>
  );
}
