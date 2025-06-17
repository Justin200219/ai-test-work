import React, { useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import '../../../pronoun-word.css';

const Level2Word4 = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const btn = document.getElementById('listenBtn');
    const audio = document.getElementById('audioPlayer');
    if (btn && audio) {
      btn.onclick = () => {
        audio.currentTime = 0;
        audio.play();
      };
    }
  }, []);

  return (
    <div className="container">
      <div className="top-header">
        <h1>Pronunciation</h1>
        <button className="lang-button" onClick={() => navigate('/Language_settings.html')}>
          <img className="flag" src="/images/110-united kingdom.svg" alt="English" />
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
          <div className="progress-bar" style={{ width: '60%' }}></div>
        </div>
      </div>
      <main className="content">
        <h2>Pronounce the word</h2>
        <div className="image-container">
          <img src="/images/ChatGPT Image Jun 4, 2025, 11_58_35 AM.svg" alt="Orange" />
        </div>
        <div className="word">
          Kleinzoon <span className="translation">(Grandson)</span>
        </div>
        <div className="phonetic">klein·zoon</div>
      </main>
      <div className="footer">
        <button className="btn listen-btn" id="listenBtn">
          <img src="/images/brand_awareness.svg" alt="" />Listen
        </button>
        <audio id="audioPlayer" src="/word-sounds/Kleinzoon.m4a"></audio>
        <Link to="/Pronunciation/Family-Category/Levels/Finished2" className="btn next-btn">Next</Link>
      </div>
    </div>
  );
};

export default Level2Word4;
