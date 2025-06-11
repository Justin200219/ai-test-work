import React, { useState, useEffect } from 'react';
import { translations } from '../contexts/LanguageContext';
import './RotatingLanguageMessage.css';

const RotatingLanguageMessage = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const languages = Object.keys(translations);
  const message = 'Please enter a sentence of at least 5 words in your native language to help us detect your preferred language.';

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % languages.length);
    }, 5000); // Change language every 3 seconds

    return () => clearInterval(interval);
  }, []);

  const currentLanguage = languages[currentIndex];
  const translatedMessage = translations[currentLanguage]?.detectLanguageDescription || message;

  return (
    <div className="rotating-message">
      <p className="message-text">{translatedMessage}</p>
      <div className="language-indicator">{currentLanguage.toUpperCase()}</div>
    </div>
  );
};

export default RotatingLanguageMessage; 