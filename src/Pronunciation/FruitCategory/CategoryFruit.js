import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import '../../pronunciation.css';

const FLOWER_WIDTH = 100;
const FLOWER_HEIGHT = 130;

const CategoryFruit = () => {
  // Check localStorage for the flag to show the open flower
  const [levelpadImg, setLevelpadImg] = useState('/images/Levelpad1.png');

  useEffect(() => {
    const flag = localStorage.getItem('fruitLevelpad');
    if (flag === '2') {
      setLevelpadImg('/images/Levelpad2.png');
      localStorage.removeItem('fruitLevelpad'); // Optionally clear the flag after showing
    }
  }, []);

  return (
    <div className="category-fruit-page">
      {/* Header */}
      <div className="top-header">
        <div className="categorie-img"></div>
        <h1>Pronunciation</h1>
        <img src="/images/Pronunciation_Icon.svg" alt="Pronunciation Icon" className="top-icon" />
        <button
          onClick={() => window.location.href = '/Language_settings.html'}
          className="lang-button"
        >
          <img className="flag" src="/images/english flag.svg" alt="English" />
          English
        </button>
      </div>

      {/* Navigation */}
      <nav>
        <div className="nav_container">
          <Link to="/pronunciation">
            <div className="nav-words-outer-2">
              <div className="nav-words-2">
                <img src="/images/Frame 33.svg" alt="Pronunciation Icon" />
              </div>
              <p>Pronunciation</p>
            </div>
          </Link>
          <Link to="/words">
            <div className="nav-words-outer">
              <div className="nav-words-1">
                <img src="/images/Frame 32.svg" alt="Words Icon" />
              </div>
              <p>Words</p>
            </div>
          </Link>
          <Link to="/sentences">
            <div className="nav-words-outer">
              <div className="nav-words-3">
                <img src="/images/Frame 34.svg" alt="Sentences Icon" />
              </div>
              <p>Sentences</p>
            </div>
          </Link>
          <div className="nav-words-outer">
            <div className="nav-words-4">
              <img src="/images/Frame 35.svg" alt="Games Icon" />
            </div>
            <p>Games</p>
          </div>
        </div>
      </nav>

      {/* Title */}
      <div className="top-text-path">
        <h1 className="pickLevel">Pick a level</h1>
        <h2 className="choosetheme">Fruit</h2>
      </div>

      {/* Path image with clickable flower */}
      <div className="container_path" style={{ position: 'relative' }}>
        <img
          src={levelpadImg}
          alt="Level pad"
          className="levelpad-image"
          draggable={false}
        />
        <Link
          to="/Pronunciation/Fruit-Category/Levels/Level-1-word-1"
          className="flower-hotspot"
          style={{
            position: 'absolute',
            left: 0,
            top: 0,
            width: FLOWER_WIDTH,
            height: FLOWER_HEIGHT,
            zIndex: 2,
            cursor: 'pointer',
            background: 'rgba(0,0,0,0)',
          }}
          aria-label="Go to Level 1"
        />
      </div>
    </div>
  );
};

export default CategoryFruit;
