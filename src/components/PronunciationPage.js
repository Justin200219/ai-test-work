import React from 'react';
import { Link } from 'react-router-dom';
import BottomNav from './BottomNav';
import '../style.css';
import '../pronunciation.css';
import '../navigation.css';

const PronunciationPage = () => {
  return (
    <div>

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
          {/* Family card - link updated to match actual structure */}
          <Link to="/Pronunciation/Family-Category/Category-Family">
            <div className="topic-card topic-card-orange">
              <img src="/images/family.png" alt="Family" />
              <h3>Family</h3>
              <p>5 levels</p>
            </div>
          </Link>
          {/* Fruit card - link updated to match actual structure */}
          <Link to="/Pronunciation/FruitCategory/CategoryFruit">
            <div className="topic-card topic-card-orange">
              <img src="/images/apple.svg" alt="Fruit" />
              <h3>Fruit</h3>
              <p>5 levels</p>
            </div>
          </Link>
          {/* Other categories - disabled since no files exist */}
          <div className="topic-card topic-card-orange topic-card-disabled">
            <img src="/images/🏠.png" alt="Huis" />
            <h3>Huis</h3>
            <p>Coming soon</p>
          </div>
          <div className="topic-card topic-card-orange topic-card-disabled">
            <img src="/images/🛒.png" alt="Supermarkt" />
            <h3>Supermarkt</h3>
            <p>Coming soon</p>
          </div>
          <div className="topic-card topic-card-orange topic-card-disabled">
            <img src="/images/🍝.png" alt="Restaurant" />
            <h3>Restaurant</h3>
            <p>Coming soon</p>
          </div>
          <div className="topic-card topic-card-orange topic-card-disabled">
            <img src="/images/📗.png" alt="School" />
            <h3>School</h3>
            <p>Coming soon</p>
          </div>
          <div className="topic-card topic-card-orange topic-card-disabled">
            <img src="/images/🕐.png" alt="Tijd / Dagen" />
            <h3>Tijd / Dagen</h3>
            <p>Coming soon</p>
          </div>
        </div>
      </div>
      <BottomNav />
    </div>
  );
};

export default PronunciationPage;
