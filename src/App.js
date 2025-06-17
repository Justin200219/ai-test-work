import React from "react";
import AIChat from "./components/AIChat";
import LanguageDetection from "./components/LanguageDetection";
import { LanguageProvider, useLanguage } from "./contexts/LanguageContext";
import {
  BrowserRouter,
  Routes,
  Route,
  Navigate,
  useNavigate,
} from "react-router-dom";
import "./App.css";

function AppContent() {
  const { t, isLanguageDetected, handleLanguageDetected } = useLanguage();
  const navigate = useNavigate();

  const handleDetected = (language) => {
    handleLanguageDetected(language);
    navigate("/chat");
  };

  return (
    <div className="app">
      <div className="app-container">
        <h1 className="app-title">{t("appTitle")}</h1>
        <Routes>
          <Route
            path="/"
            element={
              isLanguageDetected ? (
                <Navigate to="/chat" replace />
              ) : (
                <LanguageDetection onLanguageDetected={handleDetected} />
              )
            }
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


