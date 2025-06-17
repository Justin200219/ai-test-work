import React from 'react';
import { Link } from 'react-router-dom';

const Level1Word1 = () => (
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
      <button className="back-button">
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
          src="/images/ChatGPT Image Apr 23, 2025, 11_38_02 AM.svg"
          alt="Orange"
        />
      </div>

      <div className="word" data-correct="Strawberry">
        Aardbei
      </div>

      <div className="options">
        <button className="option-box">Strawberry</button>
        <button className="option-box">Orange</button>
        <button className="option-box">Apple</button>
        <button className="option-box">Banana</button>
      </div>
    </main>

    <div className="footer">
      <Link to="/Words/Fruit-Category/Levels/Level-1-word-2" className="btn next-btn">Check</Link>
    </div>
  </div>

  </div>
);

export default Level1Word1;
