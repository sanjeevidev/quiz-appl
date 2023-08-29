import React from 'react';
import './details.css'; // Import your CSS file here

function DetailsPage() {
  // Function to handle file selection
  const handleFileSelect = (event) => {
    // Your file handling logic here
  };

  return (
    <div className="page-container">
      <img className="logo" src="img/logo.png" alt="Quiz App Logo" />
      <h1 className="quiz-container">Your Details</h1>
      <form id="details-form">
        <label htmlFor="name">Name</label>
        <input type="text" id="name" name="name" required className="input-box" />
        <label htmlFor="email">Email</label>
        <input type="email" id="email" name="email" required className="input-box" />
        <label htmlFor="contact">Contact No.</label>
        <input type="tel" id="contact" name="contact" required className="input-box" />
        <label htmlFor="resume">Upload Resume</label>
        <input
          type="file"
          accept=".pdf"
          id="resume"
          name="resume"
          required
          className="input-box"
          onChange={handleFileSelect}
        />
        {/* Replace the anchor with a submit button */}
        <button type="submit" className="submit">
          Next
        </button>
      </form>
    </div>
  );
}

export default DetailsPage;