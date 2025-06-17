import React from 'react';
import { Link } from 'react-router-dom';
import BottomNav from './BottomNav';
import '../choose_game.css';
import '../navigation.css'; // Assuming navigation.css is needed for the navbar

const GamesPage = () => {
  return (
    <div>

      <div className="top-header">
        <div className="categorie/img"></div>
        <h1>Games</h1>

        <button onClick={() => window.location.href='/Language_settings.html'} className="lang-button">
          <img className="flag" src="/images/110-united kingdom.svg" alt="English" />
          English
        </button>
      </div>

      <div className="container_categories">
        <div className="game-item">
          <Link to="/games/snake" className="card-link">
            <div className="card card-snake">
              <img src="/images/ChatGPT Image Apr 23, 2025, 12_12_41 PM 1.svg" alt="Snake" />
            </div>
          </Link>
          <h3 className="game-label">Snake</h3>
        </div>

        <div className="game-item">
          <Link to="/games/memory" className="card-link">
            <div className="card card-memory">
              <img src="/images/ChatGPT Image Apr 23, 2025, 12_15_36 PM 1.svg" alt="Memory" />
            </div>
          </Link>
          <h3 className="game-label">Memory</h3>
        </div>
      </div>
      <BottomNav />
    </div>
  );
};

export default GamesPage; 
