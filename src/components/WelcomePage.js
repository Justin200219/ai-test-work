import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../App.css'; // Assuming App.css contains general styles
import '../welcome.css'; // Assuming welcome.css is needed

const WelcomePage = () => {
  const navigate = useNavigate();

  const handleNextClick = () => {
    navigate('/words');
  };

  return (
    <div className="container">
      <div className="content">
        <img src="/images/cow.svg" alt="Klets Cow" className="cow" />
        <h1>Hello! My name is Klets</h1>
        <p>I am your personal Dutch teacher! In this app you can learn words, sentences, pronunciation and play fun games!</p>
      </div>
      <button className="next-button" onClick={handleNextClick}>Next</button>
    </div>
  );
};

export default WelcomePage; 