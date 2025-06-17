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
import CategoryFruit from "./Words/FruitCategory/CategoryFruit";
import Level1Word1 from "./Words/FruitCategory/Levels/Level1Word1";
import Level1Word2 from "./Words/FruitCategory/Levels/Level1Word2";
import Level1Finished from "./Words/FruitCategory/Levels/Level1Finished";
import PronunciationCategoryFruit from './Pronunciation/FruitCategory/CategoryFruit';
import PronunciationLevel1Word1 from './Pronunciation/FruitCategory/Levels/Level1Word1';
import PronunciationLevel1Word2 from './Pronunciation/FruitCategory/Levels/Level1Word2';
import PronunciationLevel1Word3 from './Pronunciation/FruitCategory/Levels/Level1Word3';
import PronunciationLevel1Word4 from './Pronunciation/FruitCategory/Levels/Level1Word4';
import PronunciationFinished from './Pronunciation/FruitCategory/Levels/Finished';
import { LanguageProvider, useLanguage } from "./contexts/LanguageContext";
import './App.css';
import PronunciationFamilyLevel1Word1 from './Pronunciation/FamilyCategory/Levels/Level1Word1';
import PronunciationFamilyLevel1Word2 from './Pronunciation/FamilyCategory/Levels/Level1Word2';
import PronunciationFamilyLevel1Word3 from './Pronunciation/FamilyCategory/Levels/Level1Word3';
import PronunciationFamilyLevel1Word4 from './Pronunciation/FamilyCategory/Levels/Level1Word4';
import PronunciationFamilyLevel2Word1 from './Pronunciation/FamilyCategory/Levels/Level2Word1';
import PronunciationFamilyLevel2Word2 from './Pronunciation/FamilyCategory/Levels/Level2Word2';
import PronunciationFamilyLevel2Word3 from './Pronunciation/FamilyCategory/Levels/Level2Word3';
import PronunciationFamilyLevel2Word4 from './Pronunciation/FamilyCategory/Levels/Level2Word4';
import PronunciationFamilyFinished1 from './Pronunciation/FamilyCategory/Levels/Finished1';
import PronunciationFamilyFinished2 from './Pronunciation/FamilyCategory/Levels/Finished2';
import PronunciationCategoryFamily from './Pronunciation/FamilyCategory/CategoryFamily';
import SentencesCategoryFruit from './Sentences/FruitCategory/CategoryFruit';
import SentencesLevel1Sentence1 from './Sentences/FruitCategory/Levels/Level1Sentence1';
import SentencesLevel1Sentence2 from './Sentences/FruitCategory/Levels/Level1Sentence2';
import SentencesLevel1Sentence3 from './Sentences/FruitCategory/Levels/Level1Sentence3';
import SentencesLevel1Sentence4 from './Sentences/FruitCategory/Levels/Level1Sentence4';

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
          <Route path="/Words/Fruit-Category/Category-Fruit" element={<CategoryFruit />} />
          <Route path="/Words/Fruit-Category/Levels/Level-1-word-1" element={<Level1Word1 />} />
          <Route path="/Words/Fruit-Category/Levels/Level-1-word-2" element={<Level1Word2 />} />
          <Route path="/Words/Fruit-Category/Levels/Level-1-finished" element={<Level1Finished />} />
          <Route path="/pronunciation" element={<PronunciationPage />} />
          <Route path="/sentences" element={<SentencesPage />} />
          <Route path="/games" element={<GamesPage />} />
          <Route path="/ai-chat" element={<AIChat />} />
          <Route path="/Pronunciation/Fruit-Category/Levels/Level-1-word-1" element={<PronunciationLevel1Word1 />} />
          <Route path="/Pronunciation/Fruit-Category/Levels/Level-1-word-2" element={<PronunciationLevel1Word2 />} />
          <Route path="/Pronunciation/Fruit-Category/Levels/Level-1-word-3" element={<PronunciationLevel1Word3 />} />
          <Route path="/Pronunciation/Fruit-Category/Levels/Level-1-word-4" element={<PronunciationLevel1Word4 />} />
          <Route path="/Pronunciation/Fruit-Category/Levels/Finished" element={<PronunciationFinished />} />
          <Route path="/Pronunciation/FruitCategory/CategoryFruit" element={<PronunciationCategoryFruit />} />
          <Route path="/Pronunciation/Fruit-Category/Category-Fruit" element={<PronunciationCategoryFruit />} />
          <Route path="/Pronunciation/Family-Category/Levels/Level-1-word-1" element={<PronunciationFamilyLevel1Word1 />} />
          <Route path="/Pronunciation/Family-Category/Levels/Level-1-word-2" element={<PronunciationFamilyLevel1Word2 />} />
          <Route path="/Pronunciation/Family-Category/Levels/Level-1-word-3" element={<PronunciationFamilyLevel1Word3 />} />
          <Route path="/Pronunciation/Family-Category/Levels/Level-1-word-4" element={<PronunciationFamilyLevel1Word4 />} />
          <Route path="/Pronunciation/Family-Category/Levels/Level-2-word-1" element={<PronunciationFamilyLevel2Word1 />} />
          <Route path="/Pronunciation/Family-Category/Levels/Level-2-word-2" element={<PronunciationFamilyLevel2Word2 />} />
          <Route path="/Pronunciation/Family-Category/Levels/Level-2-word-3" element={<PronunciationFamilyLevel2Word3 />} />
          <Route path="/Pronunciation/Family-Category/Levels/Level-2-word-4" element={<PronunciationFamilyLevel2Word4 />} />
          <Route path="/Pronunciation/Family-Category/Levels/Finished1" element={<PronunciationFamilyFinished1 />} />
          <Route path="/Pronunciation/Family-Category/Levels/Finished2" element={<PronunciationFamilyFinished2 />} />
          <Route path="/Pronunciation/Family-Category/Category-Family" element={<PronunciationCategoryFamily />} />
          <Route path="/Sentences/Fruit-Category/Category-Fruit" element={<SentencesCategoryFruit />} />
          <Route path="/Sentences/Fruit-Category/Levels/Level-1-sentence-1" element={<SentencesLevel1Sentence1 />} />
          <Route path="/Sentences/Fruit-Category/Levels/Level-1-sentence-2" element={<SentencesLevel1Sentence2 />} />
          <Route path="/Sentences/Fruit-Category/Levels/Level-1-sentence-3" element={<SentencesLevel1Sentence3 />} />
          <Route path="/Sentences/Fruit-Category/Levels/Level-1-sentence-4" element={<SentencesLevel1Sentence4 />} />
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


