import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../App.css'; // Assuming App.css contains general styles
import '../welcome.css'; // Assuming welcome.css is needed
import '../name_input.css'; // Assuming name_input.css is needed

const NameInputPage = () => {
  const navigate = useNavigate();

  const handleNextClick = (event) => {
    event.preventDefault(); // Prevent default form submission
    navigate('/welcome');
  };

  return (
    <div className="container">
      <div className="content">
        <img src="/images/cow.svg" alt="Klets Cow" className="cow" />
        <h1>Hello! My name is Klets</h1>
        <p>I am your personal Dutch teacher! In this app you can learn words, sentences, pronunciation and play fun games!</p>

        <img src="/images/cow.svg" alt="Klets Cow" className="cow" />
        <h1>What is your name?</h1>
        <form className="name-form" onSubmit={handleNextClick}>
          <input type="text" placeholder="Enter name" className="name-input" required />
          <button type="submit" className="next-button">Next</button>
        </form>
      </div>
    </div>
  );
};

export default NameInputPage; 