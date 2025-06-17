import React from "react";
import { BrowserRouter as Router, Routes, Route, useNavigate, useLocation } from 'react-router-dom';
import AIChat from "./components/AIChat";
import LanguageDetection from "./components/LanguageDetection";
import NameInputPage from './components/NameInputPage';
import WelcomePage from './components/WelcomePage';
import WordsPage from './components/WordsPage';
import PronunciationPage from './components/PronunciationPage';
import SentencesPage from './components/SentencesPage';
import GamesPage from './components/GamesPage';
import Finished from './Words/Finished';
import { LanguageProvider, useLanguage } from "./contexts/LanguageContext";
import './App.css';

function AppContent() {
  const { t, isLanguageDetected, handleLanguageDetected } = useLanguage();
  const navigate = useNavigate();
  const location = useLocation();

  // Redirect from root path to name input once language is detected
  React.useEffect(() => {
    if (isLanguageDetected && location.pathname === '/') {
      navigate('/name-input');
    }
  }, [isLanguageDetected, navigate, location.pathname]);

  if (!isLanguageDetected) {
    return <LanguageDetection onLanguageDetected={handleLanguageDetected} />;
  }

  return (
    <div className="app">
      <div className="app-container">
        <h1 className="app-title">{t('appTitle')}</h1>
        <Routes>
          <Route path="/" element={<LanguageDetection onLanguageDetected={handleLanguageDetected} />} />
          <Route path="/name-input" element={<NameInputPage />} />
          <Route path="/welcome" element={<WelcomePage />} />
          <Route path="/words" element={<WordsPage />} />
          <Route path="/Words/finished" element={<Finished />} />
          <Route path="/pronunciation" element={<PronunciationPage />} />
          <Route path="/sentences" element={<SentencesPage />} />
          <Route path="/games" element={<GamesPage />} />
          <Route path="/ai-chat" element={<AIChat />} />
        </Routes>
      </div>
    </div>
  );
}

function App() {
  return (
    <LanguageProvider>
      <Router>
        <AppContent />
      </Router>
    </LanguageProvider>
  );
}

export default App;


