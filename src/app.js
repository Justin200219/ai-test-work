import React, { useState } from "react";
import AIChat from "./components/AIChat";
import LanguageDetection from "./components/LanguageDetection";
import NameInput from "./components/NameInput";
import WelcomePage from "./components/WelcomePage";
import { LanguageProvider, useLanguage } from "./contexts/LanguageContext";
import './App.css';

function AppContent() {
  const { t, isLanguageDetected, handleLanguageDetected } = useLanguage();
  const [step, setStep] = useState('detect');
  const [name, setName] = useState('');

  const onLanguageDetected = (lang) => {
    handleLanguageDetected(lang);
    setStep('name');
  };

  const onNameSubmit = (userName) => {
    setName(userName);
    setStep('welcome');
  };

  if (step === 'detect' && !isLanguageDetected) {
    return <LanguageDetection onLanguageDetected={onLanguageDetected} />;
  }

  if (step === 'name') {
    return <NameInput onSubmit={onNameSubmit} />;
  }

  if (step === 'welcome') {
    return <WelcomePage name={name} onStart={() => setStep('chat')} />;
  }

  return (
    <div className="app">
      <div className="app-container">
        <h1 className="app-title">{t('appTitle')}</h1>
        <AIChat />
      </div>
    </div>
  );
}

function App() {
  return (
    <LanguageProvider>
      <AppContent />
    </LanguageProvider>
  );
}

export default App;
