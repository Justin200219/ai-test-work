import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import '../navigation.css';

const BottomNav = () => {
  const location = useLocation();
  const { pathname } = location;

  return (
    <nav>
      <div className="nav_container">
        <Link to="/words" className={`nav-words-outer ${pathname.startsWith('/words') ? 'nav-words-outer-1' : ''}`}>
          <div className="nav-words-1">
            <img src="/images/Words_Icon.svg" alt="Words" />
          </div>
          <p>Words</p>
        </Link>
        <Link to="/pronunciation" className={`nav-words-outer ${pathname.startsWith('/pronunciation') ? 'nav-words-outer-2' : ''}`}>
          <div className="nav-words-2">
            <img src="/images/Pronunciation_Icon.svg" alt="Pronunciation" />
          </div>
          <p>Pronunciation</p>
        </Link>
        <Link to="/sentences" className={`nav-words-outer ${pathname.startsWith('/sentences') ? 'nav-words-outer-3' : ''}`}>
          <div className="nav-words-3">
            <img src="/images/Sentences_Icon.svg" alt="Sentences" />
          </div>
          <p>Sentences</p>
        </Link>
        <Link to="/games" className={`nav-words-outer ${pathname.startsWith('/games') ? 'nav-words-outer-4' : ''}`}>
          <div className="nav-words-4">
            <img src="/images/Games_Icon.svg" alt="Games" />
          </div>
          <p>Games</p>
        </Link>
      </div>
    </nav>
  );
};

export default BottomNav;
