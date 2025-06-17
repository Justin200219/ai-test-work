import React from 'react';
import { Link } from 'react-router-dom';
import BottomNav from './BottomNav';
import '../style.css';
import '../Words.css';
import '../navigation.css';

const WordsPage = () => {
  return (
    <div>

      <div className="top-header">
        <div className="categorie/img"></div>
        <h1>Words</h1>
        <img src="/images/Frame 32.svg" alt="Pronunciation Icon" className="Top-icon" />

        <button onClick={() => window.location.href='/Language_settings.html'} className="lang-button">
          <img className="flag" src="/images/english flag.svg" alt="English" />
          English
        </button>
      </div>

      <div className="container">
        <h2 className="choosetheme">Choose a topic</h2>
        <div className="container_categories">
          <Link to="/pronunciation/familie">
            <div className="topic-card topic-card-blue">
              <img src="/images/👨‍👩‍👧‍👦.png" alt="" />
              <h3>Familie</h3>
              <p>5 levels</p>
            </div>
          </Link>
          <Link to="/house">
            <div className="topic-card topic-card-blue">
              <img src="/images/🏠.png" alt="" />
              <h3>Huis</h3>
              <p>5 levels</p>
            </div>
          </Link>
          <Link to="/supermarket">
            <div className="topic-card topic-card-blue">
              <img src="/images/🛒.png" alt="" />
              <h3>Supermarkt</h3>
              <p>5 levels</p>
            </div>
          </Link>
          <Link to="/restaurant">
            <div className="topic-card topic-card-blue">
              <img src="/images/🍝.png" alt="" />
              <h3>Restaurant</h3>
              <p>5 levels</p>
            </div>
          </Link>
          <Link to="/school">
            <div className="topic-card topic-card-blue">
              <img src="/images/📗.png" alt="" />
              <h3>School</h3>
              <p>5 levels</p>
            </div>
          </Link>
          <Link to="/time-days">
            <div className="topic-card topic-card-blue">
              <img src="/images/🕐.png" alt="" />
              <h3>Tijd / Dagen</h3>
              <p>5 levels</p>
            </div>
          </Link>
        </div>
      </div>
      <BottomNav />
    </div>
  );
};

export default WordsPage; 
