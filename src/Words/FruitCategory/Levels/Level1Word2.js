import React from 'react';
import { Link } from 'react-router-dom';

const Level1Word2 = () => (
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

    <div href="/public/Words/Category-Fruit.html" className="sub-header">
      <button className="back-button">
        <Link to="/Words/Fruit-Category/Category-Fruit">
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
          src="/images/ChatGPT Image Apr 23, 2025, 11_38_03 AM.svg"
          alt="Orange"
        />
      </div>

      <div className="word" data-correct="Sinaasappel">
        Orange
      </div>

      <div className="options">
        <button className="option-box">Aardbei</button>
        <button className="option-box">Sinaasappel</button>
        <button className="option-box">Appel</button>
        <button className="option-box">Banaan</button>
      </div>
    </main>

    <div className="footer">
      <Link to="/Words/Fruit-Category/Levels/Level-1-word-3" className="btn next-btn">Check</Link>
    </div>
  </div>

  </div>
);

export default Level1Word2;
