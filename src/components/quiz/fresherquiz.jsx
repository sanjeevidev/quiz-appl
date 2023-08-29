import React, { useState, useEffect } from 'react';
import questions from './fresherquestion';
import './fresherqz.css';

function FresherQuiz() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedOptions, setSelectedOptions] = useState(Array(questions.length).fill(null));
  const [score, setScore] = useState(0);
  const [timeLeft, setTimeLeft] = useState(10); // Reduced time for testing
  const [quizActive, setQuizActive] = useState(true);
  const [timeIsUp, setTimeIsUp] = useState(false);
  const [popupVisible, setPopupVisible] = useState(false);

  useEffect(() => {
    if (timeLeft <= 0) {
      setTimeIsUp(true);
      setQuizActive(false);
      setPopupVisible(true);
    }
  }, [timeLeft]);

  useEffect(() => {
    const timer = setInterval(() => {
      if (timeLeft > 0 && quizActive) {
        setTimeLeft((prevTime) => prevTime - 1);
      }
    }, 1000);

    return () => {
      clearInterval(timer);
    };
  }, [timeLeft, quizActive]);

  const handleOptionSelect = (optionIndex) => {
    if (quizActive) {
      const updatedSelectedOptions = [...selectedOptions];
      updatedSelectedOptions[currentQuestion] = optionIndex;
      setSelectedOptions(updatedSelectedOptions);
    }
  };

  const handleNextQuestion = () => {
    if (quizActive && selectedOptions[currentQuestion] !== null) {
      setCurrentQuestion(currentQuestion + 1);
    }
  };

  const handlePreviousQuestion = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(currentQuestion - 1);
    }
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
        {popupVisible && (
          <div className="popup">
            <div className="popup-content">
              <p>Time is up!</p>
            </div>
          </div>
        )}
        {quizActive && (
          <div className="timer-container">
            <div className="timer">{timeLeft} sec</div>
          </div>
        )}
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
              <button className="previous-button" onClick={handlePreviousQuestion} disabled={currentQuestion === 0 || !quizActive}>
                Previous
              </button>
              <button className="next-button" onClick={handleNextQuestion} disabled={selectedOptions[currentQuestion] === null || !quizActive}>
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