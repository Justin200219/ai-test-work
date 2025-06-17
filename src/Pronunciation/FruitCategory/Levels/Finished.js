import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import '../../../pronoun-word.css';

const Finished = () => {
  useEffect(() => {
    const audio = document.getElementById('finishAudio');
    if (audio) {
      audio.play();
    }
  }, []);

  // Set a flag in localStorage to indicate the next level should show the open flower
  const handleNextLevel = () => {
    localStorage.setItem('fruitLevelpad', '2');
  };

  return (
    <div className="containerimg">
      <img src="/images/Welldoneimg.svg" alt="" />
      <Link to="/Pronunciation/Fruit-Category/Category-Fruit">
        <button className="finishBtn" onClick={handleNextLevel}>Next level</button>
      </Link>
      <audio id="finishAudio" src="/word-sounds/correct-answer.mp3" />
    </div>
  );
};

export default Finished;
