import React from "react";
import { useNavigate } from "react-router-dom";
import "./Membership.css";

import men1 from "../assets/men1.jpg";
import women1 from "../assets/women1.jpg";
import women2 from "../assets/women2.webp";
import women3 from "../assets/women3.jpg";
import men2 from "../assets/men2.jpg";
import men3 from "../assets/men3.jpg";
import men4 from "../assets/men4.avif";
import men5 from "../assets/men5.jpg";
import men8 from "../assets/men8.webp";
import men7 from "../assets/men7.jpg";

const trainers = [
  { name: "Arjun", img: men1 },
  { name: "Radha", img: women1 },
  { name: "Diya", img: women2 },
  { name: "Thaara", img: women3 },
  { name: "Karthik", img: men2 },
  { name: "Naveen", img: men3 },
  { name: "Ajith", img: men4 },
  { name: "Surya", img: men5 },
  { name: "Pradeep", img: men8 },
  { name: "Manoj", img: men7 }
];

const plans = [
  { name: "1 Month", price: "₹1500", trainer: false },
  { name: "3 Months", price: "₹4000", trainer: false },
  { name: "6 Months", price: "₹7000", trainer: false },
  { name: "1 Year", price: "₹12000", trainer: false },
  { name: "Special Trainer", price: "₹20000", trainer: true }
];

export default function Membership() {
  const navigate = useNavigate();

  return (
    <div className="membership-page">

      {/* ===== SPECIAL TRAINERS ===== */}
      <h2 className="title">Special Trainers</h2>
      <div className="trainer-grid">
        {trainers.map((t, i) => (
          <div key={i} className="trainer-card">
            <img src={t.img} alt={t.name} />
            <p>{t.name}</p>
          </div>
        ))}
      </div>

      {/* ===== MEMBERSHIP PLANS ===== */}
      <h2 className="title">Membership Plans</h2>
      <div className="plan-grid">
        {plans.map((p, i) => (
          <div key={i} className="plan-card">
            <h3>{p.name}</h3>

            <ul className="plan-features">
              <li className="tick">✔ Expert Guidance</li>
              <li className="tick">✔ Nutrition Diet</li>
              <li className={p.trainer ? "tick" : "cross"}>
                {p.trainer ? "✔ Special Trainer" : "✖ Special Trainer"}
              </li>
            </ul>

            <div className="price">{p.price}</div>
          </div>
        ))}
      </div>

      {/* ===== ENQUIRE NOW ===== */}
      <div className="enquire-wrapper">
        <button
          className="enquire-btn"
          onClick={() => navigate("/contact#enquire")}
        >
          Enquire Now
        </button>
      </div>

    </div>
  );
}
