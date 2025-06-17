import React, { useEffect } from "react";
import LanguageDetection from "./components/LanguageDetection";
import { LanguageProvider, useLanguage } from "./contexts/LanguageContext";
import './App.css';

function AppContent() {
  const { isLanguageDetected, handleLanguageDetected } = useLanguage();
  
  useEffect(() => {
    // Check if user has already completed the initial flow
    const hasCompletedFlow = localStorage.getItem('hasCompletedFlow');
    if (hasCompletedFlow) {
      // Redirect to main app
      window.location.href = '../public/Words.html';
    }
  }, []);

  if (!isLanguageDetected) {
    return <LanguageDetection onLanguageDetected={() => {
      handleLanguageDetected();
      // Store language in localStorage for persistence
      localStorage.setItem('selectedLanguage', 'en'); // Default to English for now
      window.location.href = '../public/name_input.html';
    }} />;
  }

  return null;
}

function App() {
  return (
    <LanguageProvider>
      <AppContent />
    </LanguageProvider>
  );
}

export default App;


