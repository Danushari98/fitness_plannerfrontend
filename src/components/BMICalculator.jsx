import React, { useState } from "react";
import "./BMICalculator.css";

export default function BMICalculator() {
  const [gender, setGender] = useState("male");
  const [height, setHeight] = useState(170);
  const [weight, setWeight] = useState(60);

  const bmi = (weight / ((height / 100) ** 2)).toFixed(2);

  const getStatus = () => {
    const v = parseFloat(bmi);
    if (v < 18.5) return "Underweight";
    if (v < 24.9) return "Normal";
    if (v < 29.9) return "Overweight";
    return "Obesity";
  };

  return (
    <div className="bmi-wrapper">
      {/* LEFT CONTENT CARD */}
      <div className="bmi-card">
        <h2 className="bmi-title">BMI Calculator</h2>

        {/* Gender Select Buttons */}
        <div className="gender-row">
          {["male", "female", "other"].map((g) => (
            <button
              key={g}
              className={gender === g ? "gender-btn active" : "gender-btn"}
              onClick={() => setGender(g)}
            >
              {g.charAt(0).toUpperCase() + g.slice(1)}
            </button>
          ))}
        </div>

        {/* Height Slider */}
        <div className="slider-box">
          <label>Height</label>
          <div className="value">{height} cm</div>
          <input
            type="range"
            min="100"
            max="220"
            value={height}
            onChange={(e) => setHeight(e.target.value)}
          />
        </div>

        {/* Weight Slider */}
        <div className="slider-box">
          <label>Weight</label>
          <div className="value">{weight} kg</div>
          <input
            type="range"
            min="20"
            max="200"
            value={weight}
            onChange={(e) => setWeight(e.target.value)}
          />
        </div>
      </div>

      {/* RIGHT — RESULT PANEL */}
      <div className="bmi-result-box">
        <p className="result-title">Your BMI Score</p>
        <h1 className="bmi-number">{bmi}</h1>
        <p className={`bmi-status ${getStatus().toLowerCase()}`}>
          {getStatus()}
        </p>

        {/* BMI CATEGORIES */}
        <div className="bmi-category-box">
          <div className="cat">
            <span className="label">Underweight</span>
            <span className="range">&lt; 18.5</span>
          </div>

          <div className="cat">
            <span className="label">Normal</span>
            <span className="range">18.5 – 24.9</span>
          </div>

          <div className="cat">
            <span className="label">Overweight</span>
            <span className="range">25 – 29.9</span>
          </div>

          <div className="cat">
            <span className="label">Obesity</span>
            <span className="range">30+</span>
          </div>
        </div>
      </div>
    </div>
  );
}
