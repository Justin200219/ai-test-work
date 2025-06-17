import React, { useEffect } from "react";
import AIChat from "./components/AIChat";
import LanguageDetection from "./components/LanguageDetection";
import { LanguageProvider, useLanguage } from "./contexts/LanguageContext";
import './App.css';

function AppContent() {
  const { isLanguageDetected, handleLanguageDetected } = useLanguage();
  
  useEffect(() => {
    if (isLanguageDetected) {
      window.location.href = '/public/Signup/name_input.html';
    }
  }, [isLanguageDetected]);

  if (!isLanguageDetected) {
    return <LanguageDetection onLanguageDetected={handleLanguageDetected} />;
  }

  return null; // Don't render anything after redirection
}

function App() {
  return (
    <LanguageProvider>
      <AppContent />
    </LanguageProvider>
  );
}

export default App;


