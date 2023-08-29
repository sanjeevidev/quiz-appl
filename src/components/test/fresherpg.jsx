import React from 'react';
import './fresher.css'; // Import your CSS file here

function FresherPage() {
  return (
    <div className='body'>
    <img className='logo' src='../../img/bgg.jpeg' alt="Quiz App Logo"></img>
    <div className="page-container">
      <div className="fresher-container">
        <h1>Welcome to the Quiz</h1>
        <div className="quiz-details">
          <p>Level of the Test: Fresher</p>
          <p>Total Questions Count:</p>
          <p>Theoretical:</p>
          <p>Logical:</p>
          <p>Problem Solving:</p>
          <button className="start-button">
            Start Quiz
          </button>
        </div>
      </div>
    </div>
    </div>
  );
}

export default FresherPage;