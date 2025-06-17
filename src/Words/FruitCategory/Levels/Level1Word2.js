import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import '/GitHub/ai-test-work/src/word_learning.css';

const optionsList = ["Banana", "Apple", "Orange", "Strawberry"];
const correctAnswer = "Banana";

const Level1Word2 = () => {
  const [selected, setSelected] = useState(null);
  const [answeredCorrectly, setAnsweredCorrectly] = useState(false);
  const navigate = useNavigate();

  const handleOptionClick = (option) => {
    if (answeredCorrectly) return;
    setSelected(option);
  };

  const handleCheck = (e) => {
    if (!selected) {
      e.preventDefault();
      return;
    }
    if (answeredCorrectly) return;
    e.preventDefault();
    if (selected === correctAnswer) {
      setAnsweredCorrectly(true);
    } else {
      setSelected(null);
    }
  };

  return (
    <div>
      <div className="container">
        <div className="top-header">
          <h1>Words</h1>
          <button className="lang-button">
            <img
              className="flag"
              src="/images/110-united kingdom.svg"
              alt="English"
            />
            English
          </button>
        </div>

        <hr className="divider" />

        <div className="sub-header">
          <button className="back-button" onClick={() => navigate(-1)}>
            <img src="/images/Group 299.svg" alt="Back" />
            Back
          </button>
          <div className="progress">
            <div className="progress-bar"></div>
          </div>
        </div>

        <main className="content">
          <h2>Choose the correct word</h2>

          <div className="image-container">
            <img
              src="/images/banana.svg"
              alt="Banana"
            />
          </div>

          <div className="word" data-correct={correctAnswer}>
            Banaan
          </div>

          <div className="options">
            {optionsList.map((option) => {
              let className = "option-box";
              if (selected === option && !answeredCorrectly) className += " selected";
              if (answeredCorrectly && option === correctAnswer) className += " correct";
              if (selected === option && !answeredCorrectly && selected !== correctAnswer) className += " wrong";
              return (
                <button
                  key={option}
                  className={className}
                  onClick={() => handleOptionClick(option)}
                  disabled={answeredCorrectly}
                >
                  {option}
                </button>
              );
            })}
          </div>
        </main>

        <div className="footer">
          {answeredCorrectly ? (
            <Link
              to="/Words/Fruit-Category/Levels/Level-1-finished"
              className="btn next-btn correct-btn"
              onClick={() => localStorage.setItem('fruitLevelpad', '2')}
            >
              Next
            </Link>
          ) : (
            <button className="btn next-btn" onClick={handleCheck}>
              Check
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default Level1Word2;
