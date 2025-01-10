import React, { useState } from "react";
import "./recruitment.css";

const Recruitment = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    club: "",
  });

  const clubs = ["Sports Club", "Music Club", "Art Club", "Coding Club", "Literature Club"];

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Club Join Form Data Submitted:", formData);
    // Add form submission logic here
  };

  return (
    <div className="container">
      <h2>Join a Club</h2>
      <p>Be part of a club that matches your interests. Fill in the form below!</p>
      <form onSubmit={handleSubmit}>
        {/* Full Name */}
        <div className="form-group">
          <label>Full Name</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleInputChange}
            required
          />
        </div>

        {/* Email */}
        <div className="form-group">
          <label>Email</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            required
          />
        </div>

        {/* Phone */}
        <div className="form-group">
          <label>Phone</label>
          <input
            type="tel"
            name="phone"
            value={formData.phone}
            onChange={handleInputChange}
            required
          />
        </div>

        {/* Club Selection */}
        <div className="form-group">
          <label>Select Club</label>
          <select
            name="club"
            value={formData.club}
            onChange={handleInputChange}
            required
          >
            <option value="" disabled>
              Choose a club
            </option>
            {clubs.map((club, index) => (
              <option key={index} value={club}>
                {club}
              </option>
            ))}
          </select>
        </div>

        {/* Submit Button */}
        <div className="button-container">
          <button type="submit" className="submit-button">
            Join Now
          </button>
        </div>
      </form>
    </div>
  );
};

export default Recruitment;
