import React from 'react';
import '../navigation.css';

const Navigation = ({ activePage }) => {
  return (
    <nav>
      <div className="nav_container">
        <a href="/public/Words.html">
          <div className={`nav-words-outer ${activePage === 'words' ? 'nav-words-outer-1' : ''}`}>
            <div className={`nav-words-1 ${activePage === 'words' ? 'active' : ''}`}>
              <img src="../public/images/Frame 32.svg" alt="Words Icon" />
            </div>
            <p>Words</p>
          </div>
        </a>
        <a href="/public/pronunciation.html">
          <div className={`nav-words-outer ${activePage === 'pronunciation' ? 'nav-words-outer-2' : ''}`}>
            <div className={`nav-words-2 ${activePage === 'pronunciation' ? 'active' : ''}`}>
              <img src="../public/images/Frame 33.svg" alt="Pronunciation Icon" />
            </div>
            <p>Pronunciation</p>
          </div>
        </a>
        <a href="/public/Sentences.html">
          <div className={`nav-words-outer ${activePage === 'sentences' ? 'nav-words-outer-3' : ''}`}>
            <div className={`nav-words-3 ${activePage === 'sentences' ? 'active' : ''}`}>
              <img src="../public/images/Frame 34.svg" alt="Sentences Icon" />
            </div>
            <p>Sentences</p>
          </div>
        </a>
        <a href="/public/Games.html">
          <div className={`nav-words-outer ${activePage === 'games' ? 'nav-words-outer-4' : ''}`}>
            <div className={`nav-words-4 ${activePage === 'games' ? 'active' : ''}`}>
              <img src="../public/images/Frame 35.svg" alt="Games Icon" />
            </div>
            <p>Games</p>
          </div>
        </a>
        <a href="/public/conversation.html">
          <div className={`nav-words-outer ${activePage === 'chat' ? 'nav-words-outer-5' : ''}`}>
            <div className={`nav-words-5 ${activePage === 'chat' ? 'active' : ''}`}>
              <img src="../public/images/chat-icon.svg" alt="Chat Icon" />
            </div>
            <p>Chat</p>
          </div>
        </a>
      </div>
    </nav>
  );
};

export default Navigation; 