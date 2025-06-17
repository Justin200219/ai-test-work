import React from 'react';
import { Link } from 'react-router-dom';
import '../style.css';
import '../Sentences.css';
import '../navigation.css';

const SentencesPage = () => {
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
        <h1>Sentences</h1>
        <img src="/images/Sentences_Icon.svg" alt="Pronunciation Icon" className="Top-icon" />

        <button onClick={() => window.location.href='/Language_settings.html'} className="lang-button">
          <img className="flag" src="/images/english flag.svg" alt="English" />
          English
        </button>
      </div>

      <div className="container">
        <h2 className="choosetheme">Choose a topic</h2>
        <div className="container_categories">
          <Link to="/sentences/familie">
            <div className="card">
              <img src="/images/👨‍👩‍👧‍👦.png" alt="" />
              <h3>Familie</h3>
              <p>5 levels</p>
            </div>
          </Link>
          <Link to="/sentences/huis">
            <div className="card">
              <img src="/images/🏠.png" alt="" />
              <h3>Huis</h3>
              <p>5 levels</p>
            </div>
          </Link>
          <Link to="/sentences/supermarkt">
            <div className="card">
              <img src="/images/🛒.png" alt="" />
              <h3>Supermarkt</h3>
              <p>5 levels</p>
            </div>
          </Link>
          <Link to="/sentences/restaurant">
            <div className="card">
              <img src="/images/🍝.png" alt="" />
              <h3>Restaurant</h3>
              <p>5 levels</p>
            </div>
          </Link>
          <Link to="/sentences/school">
            <div className="card">
              <img src="/images/📗.png" alt="" />
              <h3>School</h3>
              <p>5 levels</p>
            </div>
          </Link>
          <Link to="/sentences/tijddagen">
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

export default SentencesPage; 