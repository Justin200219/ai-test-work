import React from 'react';
import { Link } from 'react-router-dom';
import '../style.css';
import '../pronunciation.css';
import '../navigation.css';

const PronunciationPage = () => {
  return (
    <div>
      <nav className="navbar">
        <Link to="/words">Words</Link>
        <Link to="/pronunciation">Pronunciation</Link>
        <Link to="/sentences">Sentences</Link>
        <Link to="/games">Games</Link>
        <Link to="/ai-chat">AI Chat</Link>
      </nav>

      <div className="top-header">
        <div className="categorie/img"></div>
        <h1>Pronunciation</h1>
        <img src="/images/Pronunciation_Icon.svg" alt="Pronunciation Icon" className="Top-icon" />

        <button onClick={() => window.location.href='/Language_settings.html'} className="lang-button">
          <img className="flag" src="/images/english flag.svg" alt="English" />
          English
        </button>
      </div>

      <div className="container">
        <h2 className="choosetheme">Choose a topic</h2>

        <div className="container_categories">
          <Link to="/pronunciation/familie">
            <div className="card">
              <img src="/images/👨‍👩‍👧‍👦.png" alt="" />
              <h3>Familie</h3>
              <p>5 levels</p>
            </div>
          </Link>
          <Link to="/pronunciation/huis">
            <div className="card">
              <img src="/images/🏠.png" alt="" />
              <h3>Huis</h3>
              <p>5 levels</p>
            </div>
          </Link>
          <Link to="/pronunciation/supermarkt">
            <div className="card">
              <img src="/images/🛒.png" alt="" />
              <h3>Supermarkt</h3>
              <p>5 levels</p>
            </div>
          </Link>
          <Link to="/pronunciation/restaurant">
            <div className="card">
              <img src="/images/🍝.png" alt="" />
              <h3>Restaurant</h3>
              <p>5 levels</p>
            </div>
          </Link>
          <Link to="/pronunciation/school">
            <div className="card">
              <img src="/images/📗.png" alt="" />
              <h3>School</h3>
              <p>5 levels</p>
            </div>
          </Link>
          <Link to="/pronunciation/tijddagen">
            <div className="card">
              <img src="/images/🕐.png" alt="" />
              <h3>Tijd / Dagen</h3>
              <p>5 levels</p>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default PronunciationPage; 