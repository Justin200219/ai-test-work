import React from "react";
import AIChat from "./components/AIChat";
import LanguageDetection from "./components/LanguageDetection";
import { LanguageProvider, useLanguage } from "./contexts/LanguageContext";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";

function AppContent() {
  const { t, handleLanguageDetected } = useLanguage();

  const handleDetected = (language) => {
    handleLanguageDetected(language);
    window.location.href = "/Signup/name_input.html";
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


