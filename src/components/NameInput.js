import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useLanguage } from "../contexts/LanguageContext";
import "../name_input.css";

function NameInput() {
  const [name, setName] = useState("");
  const { setUserName } = useLanguage();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name.trim()) return;
    setUserName(name.trim());
    navigate("/welcome");
  };

  return (
    <div className="container">
      <div className="content">
        <h1>What is your name?</h1>
        <form onSubmit={handleSubmit} className="name-form">
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="name-input"
            placeholder="Enter your name"
          />
        </form>
        <button
          className="next-button"
          onClick={handleSubmit}
          disabled={!name.trim()}
        >
          Next
        </button>
      </div>
    </div>
  );
}

export default NameInput;
