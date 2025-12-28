import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar.jsx";
import Footer from "./components/Footer.jsx";

import Home from "./pages/Home.jsx";

import Workouts from "./components/Workouts.jsx";

// NEW PAGES IMPORTS
import AboutUs from "./components/About.jsx";
import News from "./components/News.jsx";
import Contact from "./components/Contact.jsx";
import BMICalculator from "./components/BMICalculator.jsx";
import Membership from "./components/Membership.jsx";
import WhyJoin from "./components/WhyJoin.jsx";  // ✅ FIXED

export default function App() {
  return (
    <BrowserRouter>
      <Navbar />

      {/* CONTENT AREA */}
      <div className="app-content">
        <Routes>
          <Route path="/" element={<Home />} />
          
          <Route path="/workouts" element={<Workouts />} />
          <Route path="/why-join" element={<WhyJoin />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/news" element={<News />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/bmi" element={<BMICalculator />} />
          <Route path="/membership" element={<Membership />} />
        </Routes>
      </div>

      <Footer />
    </BrowserRouter>
  );
}
