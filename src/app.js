import React from "react";
import AIChat from "./components/AIChat";
import LanguageDetection from "./components/LanguageDetection";
import { LanguageProvider, useLanguage } from "./contexts/LanguageContext";
import './App.css';

function AppContent() {
  const { t, isLanguageDetected, handleLanguageDetected } = useLanguage();
  
  if (!isLanguageDetected) {
    return <LanguageDetection onLanguageDetected={handleLanguageDetected} />;
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
