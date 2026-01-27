import React from "react";
import "./About.css";

export default function About() {
  return (
    <div className="about-page">

      {/* SECTION 1 – DARK BG WITH IMAGE */}
      <section className="about-hero">
        <div className="overlay"></div>

        <div className="content">
          <h1>About Our Gym</h1>
          <p>
            At <strong>Your Gym Name</strong>, we are committed to redefining
            fitness through excellence and innovation. Our goal is to provide a
            holistic fitness experience with expert guidance and personalized programs.
          </p>
        </div>
      </section>

      {/* SECTION 2 – ANOTHER IMAGE LEFT + TEXT RIGHT */}
      <section className="about-section">
        <div className="image-side">
          <div className="overlay"></div>
        </div>

        <div className="text-side">
          <h2>Designed For You</h2>
          <p>
            We cater to individuals at all levels — from beginners seeking a
            healthier lifestyle to athletes aiming for peak performance.
          </p>
          <p>
            Our certified trainers design customized workout plans focused on
            strength, endurance, flexibility, and overall well-being.
          </p>
        </div>
      </section>
    </div>
  );
}
