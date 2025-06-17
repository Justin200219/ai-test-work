import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import './WelcomePage.css';

const WelcomePage = ({ name, onStart }) => {
  const { t } = useLanguage();
  return (
    <div className="welcome-container">
      <h2>{t('welcome')}, {name}!</h2>
      <button onClick={onStart} className="start-button">
        {t('startChat')}
      </button>
    </div>
  );
};

export default WelcomePage;
