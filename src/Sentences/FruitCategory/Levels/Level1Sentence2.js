import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import '../../../word_learning.css';

const optionsList = ["Aardbei", "ben cool", "Appel", "Banaan"];
const correctAnswer = "ben cool";

const Level1Sentence2 = () => {
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
      setSelected(null); // clear selection so they must pick again
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
          <h2>Finish the sentence</h2>

          <div className="big-cow-sentence">
            <img
              src="/images/orange big cow.svg"
              alt="Orange"
            />
          </div>

          <div className="sentence" data-correct={correctAnswer}>
            <h4>Ik</h4>
            <hr className="orange-vertical-dotted-line" />
          </div>

          <div className="sentence-translation">
            <h4>Ik</h4>
            <hr className="orange-vertical-dotted-line" />
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
              to="/Sentences/Fruit-Category/Levels/Level-1-sentence-3"
              className="btn next-btn correct-btn"
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

export default Level1Sentence2;
