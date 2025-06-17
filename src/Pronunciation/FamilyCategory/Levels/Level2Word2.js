import React, { useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import '../../../pronoun-word.css';

const Level2Word2 = () => {
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
          <div className="progress-bar" style={{ width: '30%' }}></div>
        </div>
      </div>
      <main className="content">
        <h2>Pronounce the word</h2>
        <div className="image-container">
          <img src="/images/ChatGPT Image Jun 4, 2025, 12_01_49 PM.svg" alt="Orange" />
        </div>
        <div className="word">
          Oma <span className="translation">(Grandmother)</span>
        </div>
        <div className="phonetic">o·ma</div>
      </main>
      <div className="footer">
        <button className="btn listen-btn" id="listenBtn">
          <img src="/images/brand_awareness.svg" alt="" />Listen
        </button>
        <audio id="audioPlayer" src="/word-sounds/Oma.m4a"></audio>
        <Link to="/Pronunciation/Family-Category/Levels/Level-2-word-3" className="btn next-btn">Next</Link>
      </div>
    </div>
  );
};

export default Level2Word2;
