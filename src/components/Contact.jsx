import React, { useState } from "react";
import "./Contact.css";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("http://127.0.0.1:8000/api/enquire/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        alert("Enquiry Submitted Successfully ✅");
        setFormData({
          name: "",
          email: "",
          phone: "",
          message: "",
        });
      } else {
        alert("Submission Failed ❌");
      }
    } catch (error) {
      console.error(error);
      alert("Server Error ❌");
    }
  };

  return (
    <div className="contact-bg">
      <div className="contact-card">

        {/* ===== LEFT SIDE (STATIC – NO BACKEND) ===== */}
        <div className="contact-left">
          <h1 className="title">Get in Touch!</h1>

          <h2 className="section-title">Corporate Office</h2>
          <p><strong>Address:</strong> #18/70, Halls Road, 100 Feet road, Coimbatore – 	
641110.</p>
          <p><strong>Phone:</strong> 9876543210</p>
          <p><strong>Email:</strong> apexstrengthclub@gmail.com</p>

          <h2 className="section-title">Business Opportunities</h2>
          <p><strong>Phone:</strong> +91 9876543210</p>
          <p><strong>Phone:</strong> +91 9876543201</p>
          <p><strong>Email:</strong> apexstrengthclub@gmail.com</p>
        </div>

        {/* ===== RIGHT SIDE (ENQUIRE FORM – BACKEND CONNECTED) ===== */}
        <div className="contact-right">
          <h1 className="title">Enquire Now</h1>

          <form onSubmit={handleSubmit}>
            <input
              type="text"
              name="name"
              placeholder="Name*"
              required
              value={formData.name}
              onChange={handleChange}
            />

            <input
              type="email"
              name="email"
              placeholder="Email*"
              required
              value={formData.email}
              onChange={handleChange}
            />

            <div className="phone-wrapper">
              <select disabled>
                <option value="+91">🇮🇳 +91</option>
              </select>

              <input
                type="text"
                name="phone"
                placeholder="Phone Number*"
                required
                value={formData.phone}
                onChange={handleChange}
              />
            </div>

            <textarea
              name="message"
              placeholder="Detail Message"
              rows="5"
              value={formData.message}
              onChange={handleChange}
            ></textarea>

            <button type="submit" className="submit-btn">
              Enquire
            </button>
          </form>
        </div>

      </div>
    </div>
  );
}
