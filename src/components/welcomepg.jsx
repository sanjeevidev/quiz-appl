import React from 'react';
import logoimage from '../img/bgg.jpeg';
import './welcome.css'; // Import your CSS file here

function WelcomePage() {
  return (
    <div className="body">
      <img className="logo" src="{logoimage}" alt="Quiz App Logo" />
      <div className="welcome-container">
        <div>
          <h1>Welcome to the Quiz App</h1>
          <a className="start-button" href="details.html">
            Start
          </a>
        </div>
      </div>
    </div>
  );
}
export default WelcomePage;