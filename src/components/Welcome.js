import React from "react";
import { Link } from "react-router-dom";
import { useLanguage } from "../contexts/LanguageContext";
import "../welcome.css";
import "../navigation.css";

function Welcome() {
  const { userName } = useLanguage();

  return (
    <div className="container">
      <div className="content">
        <h1>Welcome{userName ? `, ${userName}` : ""}!</h1>
      </div>
      <nav>
        <div className="nav_container">
          <div className="nav-words-outer">
            <Link className="nav-words-1" to="/words" />
            <p>Words</p>
          </div>
          <div className="nav-words-outer-1">
            <Link className="nav-words-2" to="/pronunciation" />
            <p>Pronunciation</p>
          </div>
          <div className="nav-words-outer-2">
            <Link className="nav-words-3" to="/sentences" />
            <p>Sentences</p>
          </div>
          <div className="nav-words-outer-3">
            <Link className="nav-words-4" to="/games" />
            <p>Games</p>
          </div>
          <div className="nav-words-outer-4">
            <Link className="nav-words-5" to="/chat" />
            <p>Chat</p>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Welcome;
