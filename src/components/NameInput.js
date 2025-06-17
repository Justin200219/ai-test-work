import React, { useState } from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import './NameInput.css';

const NameInput = ({ onSubmit }) => {
  const [name, setName] = useState('');
  const { t } = useLanguage();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name.trim()) return;
    onSubmit(name.trim());
  };

  return (
    <div className="name-input-container">
      <h2>{t('askName')}</h2>
      <form onSubmit={handleSubmit} className="name-form">
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder={t('enterName')}
          className="name-input"
        />
        <button type="submit" disabled={!name.trim()} className="name-button">
          {t('continue')}
        </button>
      </form>
    </div>
  );
};

export default NameInput;
