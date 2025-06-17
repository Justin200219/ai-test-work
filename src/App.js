import React from "react";
import AIChat from "./components/AIChat";
import LanguageDetection from "./components/LanguageDetection";

import NameInput from "./components/NameInput";
import Welcome from "./components/Welcome";
import WordsPage from "./components/WordsPage";
import PronunciationPage from "./components/PronunciationPage";
import SentencesPage from "./components/SentencesPage";
import GamesPage from "./components/GamesPage";

import { LanguageProvider, useLanguage } from "./contexts/LanguageContext";
import { BrowserRouter, Routes, Route, useNavigate } from "react-router-dom";
import "./App.css";

function AppContent() {
  const { t, handleLanguageDetected } = useLanguage();
  const navigate = useNavigate();

  const handleDetected = (language) => {
    handleLanguageDetected(language);
    navigate("/name");
  };

  return (
    <div className="app">
      <div className="app-container">
        <h1 className="app-title">{t("appTitle")}</h1>
        <Routes>
          <Route
            path="/"
            element={<LanguageDetection onLanguageDetected={handleDetected} />}
          />
          <Route path="/name" element={<NameInput />} />
          <Route path="/welcome" element={<Welcome />} />
          <Route path="/words" element={<WordsPage />} />
          <Route path="/pronunciation" element={<PronunciationPage />} />
          <Route path="/sentences" element={<SentencesPage />} />
          <Route path="/games" element={<GamesPage />} />
          <Route path="/chat" element={<AIChat />} />
        </Routes>
      </div>
    </div>
  );
}

function App() {
  return (
    <LanguageProvider>
      <BrowserRouter>
        <AppContent />
      </BrowserRouter>
    </LanguageProvider>
  );
}

export default App;
