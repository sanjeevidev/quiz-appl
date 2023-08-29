import React from 'react';
import './category.css'; // Import your CSS file here

function ExperienceQuiz() {
  return (
    <div className="page-container">
      <div className="experience-container">
        <h1>Level of Experience</h1>
        <div className="experience-buttons">
          <div className="popup">
            <button className="experience-button" data-message="Fresher">
              Fresher
            </button>
            <span className="popuptext">0-2 Yrs</span>
          </div>
          <div className="popup">
            <button className="experience-button" data-message="Intermediate">
              Intermediate
            </button>
            <span className="popuptext">2-5 Yrs</span>
          </div>
          <div className="popup">
            <button className="experience-button" data-message="Expert">
              Expert
            </button>
            <span className="popuptext">5 Yrs - Above</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ExperienceQuiz;