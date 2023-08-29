import React, { useState, useEffect } from 'react';
import questions from './fresherquestion.js'; // Import the questions data
import './fresherqz.css'; // Import your CSS file here

function FresherQuiz() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedOptions, setSelectedOptions] = useState(Array(questions.length).fill(null));
  const [score, setScore] = useState(0);
  const [timeLeft, setTimeLeft] = useState(300); // 5 minutes in seconds

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prevTime) => prevTime - 1);
    }, 1000);

    return () => {
      clearInterval(timer);
    };
  }, []);

  const handleOptionSelect = (optionIndex) => {
    const updatedSelectedOptions = [...selectedOptions];
    updatedSelectedOptions[currentQuestion] = optionIndex;
    setSelectedOptions(updatedSelectedOptions);
  };

  const handleNextQuestion = () => {
    if (selectedOptions[currentQuestion] !== null) {
      setCurrentQuestion(currentQuestion + 1);
    }
  };

  const handlePreviousQuestion = () => {
    setCurrentQuestion(currentQuestion - 1);
  };

  useEffect(() => {
    let calculatedScore = 0;
    for (let i = 0; i < questions.length; i++) {
      if (selectedOptions[i] !== null && selectedOptions[i] === questions[i].correctOption) {
        calculatedScore++;
      }
    }
    setScore(calculatedScore);
  }, [selectedOptions]);

  return (
    <div className="quiz-page">
      <header className="quiz-header">
        <h1>Quiz Questions</h1>
      </header>
      <div className="quiz-container">
        <div className="timer">{timeLeft} sec</div>
        {currentQuestion < questions.length ? (
          <div className="question">
            <p>{questions[currentQuestion].question}</p>
            {questions[currentQuestion].options.map((option, index) => (
              <button
                key={index}
                className={`option-button ${selectedOptions[currentQuestion] === index ? 'selected' : ''}`}
                onClick={() => handleOptionSelect(index)}
              >
                {option}
              </button>
            ))}
            <div className="button-container">
              <button className="previous-button" onClick={handlePreviousQuestion} disabled={currentQuestion === 0}>
                Previous
              </button>
              <button className="next-button" onClick={handleNextQuestion} disabled={selectedOptions[currentQuestion] === null}>
                Next
              </button>
            </div>
          </div>
        ) : (
          <div className="quiz-completed">
            <p>Quiz completed! Your score: {score}/{questions.length}</p>
          </div>
        )}
      </div>
    </div>
  );
}

export default FresherQuiz;