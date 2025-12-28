import React from "react";
import "./News.css";

/* ===== IMPORT IMAGES PROPERLY ===== */
import ch1 from "../assets/ch1.jpg";
import ch2 from "../assets/ch2.jpg";
import ch3 from "../assets/ch3.jpg";
import ch4 from "../assets/ch4.webp";
import ch5 from "../assets/ch5.avif";

export default function News() {
  return (
    <div className="news-page-bg">

      <div className="news-container">

        <h1 className="news-title">
          Tamil Nadu Bodybuilding & Powerlifting News (2021 - 2025)
        </h1>

        {/* ===== 2021 ===== */}
        <div className="news-card">
          <img src={ch1} alt="2021 Tamil Nadu Competition" />
          <div className="news-content">
            <h2>🏆 Tamil Nadu Bodybuilding Highlights – 2021</h2>
            <p>
              • Karthik Eswar – Gold (85kg) + Champion of Champions<br />
              • Ajithkumar – Gold (55kg)<br />
              • Karthik M – Gold (90kg)<br />
              • Dinesh Narayanan – Bronze (80kg)<br />
              • Vignesh – Bronze (60kg)<br />
              • Suresh – Bronze (100kg)<br /><br />
              Junior Nationals 2021:<br />
              • Suresh – Gold (+75kg)<br />
              • Jayaraman – Gold (50–60 yrs Masters)
            </p>
          </div>
        </div>

        {/* ===== 2022 ===== */}
        <div className="news-card">
          <img src={ch2} alt="2022 Tamil Nadu Competition" />
          <div className="news-content">
            <h2>🏆 Tamil Nadu Bodybuilding Highlights – 2022</h2>
            <p>
              • Inspector Stephen Jose – Overall Mr. Tamil Nadu 2022<br />
              • G. Santhosh – Bronze (Students & Junior)<br />
              • Yogesh – Mr. Tamil Nadu Title Winner<br />
              • Shajin Joz – Bronze, later 4th in Mr.India 2022
            </p>
          </div>
        </div>

        {/* ===== 2023 ===== */}
        <div className="news-card">
          <img src={ch3} alt="2023 Tamil Nadu Competition" />
          <div className="news-content">
            <h2>🏆 Tamil Nadu Bodybuilding Highlights – 2023</h2>
            <p>
              • Arun Kumar – Overall Mr. Tamil Nadu (WFF)<br />
              • Saravanan Mani – Overall Champion (TABBA)<br />
              • P. Anderson – 1st Place (85kg)
            </p>
          </div>
        </div>

        {/* ===== 2024 ===== */}
        <div className="news-card">
          <img src={ch4} alt="2024 Tamil Nadu Competition" />
          <div className="news-content">
            <h2>🏆 Mr. Erode & Mr. Tamil Nadu Highlights – 2024</h2>
            <p>
              Champion of Champion Winners:<br />
              • 1st – ₹15,000 + Trophy<br />
              • Runner – ₹10,000 + Trophy<br /><br />
              Deadlift Competition:<br />
              • Sangeeta – Silver (105kg)<br />
              • Manisha Kiran – Senior 5th (135kg)<br />
              • Mohamed Irfan – 5th (195kg)
            </p>
          </div>
        </div>

        {/* ===== 2025 ===== */}
        <div className="news-card">
          <img src={ch5} alt="2025 Tamil Nadu Competition" />
          <div className="news-content">
            <h2>🏆 Tamil Nadu / BU Physique Highlights – 2025</h2>
            <p>
              • P. Praveen Raj – Gold (60–65kg) + Runner-Up Mr. Bharathiar<br />
              • S. Saravanan – Gold (90+kg)<br />
              • College Team – Overall 3rd Place<br /><br />
              National Powerlifting:<br />
              • R. Balamurugan – 1st Place (Master 1 – 66kg)
            </p>
          </div>
        </div>

      </div>

    </div>
  );
}
