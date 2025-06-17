import React, { useState } from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import RotatingLanguageMessage from './RotatingLanguageMessage';
import './LanguageDetection.css';

const LanguageDetection = ({ onLanguageDetected }) => {
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const { t } = useLanguage();

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!input.trim()) return;

    setIsLoading(true);
    try {
      const response = await fetch('http://localhost:3001/api/detect-language', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ text: input }),
      });

      const data = await response.json();
      if (data.success && data.language) {
        onLanguageDetected(data.language);
      }
    } catch (error) {
      console.error('Language detection failed:', error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="language-detection-container">
      <h2>{t('detectLanguageTitle')}</h2>
      <RotatingLanguageMessage />
      <form onSubmit={handleSubmit} className="detection-form">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder={t('enterWord')}
          className="detection-input"
          disabled={isLoading}
        />
        <button
          type="submit"
          disabled={isLoading || !input.trim()}
          className="detection-button"
        >
          {isLoading ? t('detecting') : t('detect')}
        </button>
      </form>
    </div>
  );
};

export default LanguageDetection; 