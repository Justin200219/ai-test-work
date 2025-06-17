import React from "react";
import AIChat from "./components/AIChat";
import LanguageDetection from "./components/LanguageDetection";
import { BrowserRouter, Routes, Route } from "react-router-dom";

    window.location.href = "/Signup/name_input.html";


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
