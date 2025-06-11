import React from 'react';
import './LanguageSelector.css';

const languages = [
  { code: 'en', name: 'English' },
  { code: 'ar', name: 'Arabic العربية' },
  { code: 'tr', name: 'Turkish' },
  { code: 'ku', name: 'Kurdish کوردی' },
  { code: 'ckb', name: 'Kurdish سۆرانی' },
  { code: 'ti', name: 'Tigrinia' },
  { code: 'so', name: 'Somalian' },
  { code: 'es', name: 'Spanish' },
  { code: 'ur', name: 'Urdu' },
  { code: 'fa', name: 'Farsi' },
  { code: 'bn', name: 'Bengali' },
  { code: 'zh', name: 'Chinese' },
  { code: 'am', name: 'Amharic' },
  { code: 'ru', name: 'Russian' },
  { code: 'uk', name: 'Ukrainian' },
  { code: 'pa', name: 'Punjabi (India)' },
  { code: 'pnb', name: 'Punjabi پنجابی' }
];

const LanguageSelector = ({ selectedLanguage, onLanguageChange }) => {
  return (
    <div className="language-selector">
      <select
        value={selectedLanguage}
        onChange={(e) => onLanguageChange(e.target.value)}
        className="language-select"
      >
        {languages.map((language) => (
          <option key={language.code} value={language.code}>
            {language.name}
          </option>
        ))}
      </select>
    </div>
  );
};

export default LanguageSelector;
  