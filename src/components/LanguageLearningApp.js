import { useState } from "react";

const countries = ["English", "French", "Spanish", "German"];
const dutchWords = [
  { dutch: "appel", en: "apple", fr: "pomme", es: "manzana", de: "apfel" },
  { dutch: "fiets", en: "bicycle", fr: "vélo", es: "bicicleta", de: "fahrrad" },
  { dutch: "huis", en: "house", fr: "maison", es: "casa", de: "haus" },
];

export default function LanguageLearningApp() {
  const [page, setPage] = useState("home");
  const [name, setName] = useState("");
  const [language, setLanguage] = useState("");
  const [currentWord, setCurrentWord] = useState(null);
  const [userInput, setUserInput] = useState("");
  const [feedback, setFeedback] = useState("");

  // Go to next page
  const goTo = (p) => {
    setFeedback("");
    setUserInput("");
    setPage(p);
  };

  // Start lesson: pick a random word
  const startLesson = () => {
    const word = dutchWords[Math.floor(Math.random() * dutchWords.length)];
    setCurrentWord(word);
    goTo("lesson");
  };

  // Check answer
  const checkAnswer = () => {
    if (userInput.trim().toLowerCase() === (currentWord?.dutch || "")) {
      setFeedback("✅ Correct!");
    } else {
      setFeedback("❌ Try again!");
    }
  };

  // --- Pages ---
  if (page === "home") {
    return (
      <div style={{display:'flex',flexDirection:'column',alignItems:'center',justifyContent:'center',height:'100vh'}}>
        <h1>Welcome to Language App</h1>
        <button style={{padding:'1em 2em',fontSize:'1.2em'}} onClick={()=>goTo("name")}>Start</button>
      </div>
    );
  }
  if (page === "name") {
    return (
      <div style={{display:'flex',flexDirection:'column',alignItems:'center',justifyContent:'center',height:'100vh'}}>
        <h2>What is your name?</h2>
        <input
          style={{padding:'0.5em',fontSize:'1em',margin:'1em'}}
          placeholder="Enter name"
          value={name}
          onChange={e=>setName(e.target.value)}
        />
        <button disabled={!name.trim()} onClick={()=>goTo("language")}>Next</button>
      </div>
    );
  }
  if (page === "language") {
    return (
      <div style={{display:'flex',flexDirection:'column',alignItems:'center',justifyContent:'center',height:'100vh'}}>
        <h2>Hello{name ? ", "+name : ""}! Choose your language:</h2>
        <select value={language} onChange={e=>setLanguage(e.target.value)} style={{padding:'0.5em',fontSize:'1em',margin:'1em'}}>
          <option value="">-- Choose --</option>
          {countries.map(l=>(<option key={l} value={l}>{l}</option>))}
        </select>
        <button disabled={!language} onClick={startLesson}>Start Lesson</button>
      </div>
    );
  }
  if (page === "lesson") {
    return (
      <div style={{display:'flex',flexDirection:'column',alignItems:'center',justifyContent:'center',height:'100vh'}}>
        <h2>Translate to Dutch:</h2>
        <div style={{fontSize:'2em',margin:'1em'}}>
          {currentWord ? currentWord[language.slice(0,2).toLowerCase()] : ""}
        </div>
        <input
          style={{padding:'0.5em',fontSize:'1em',margin:'1em'}}
          placeholder="Type the Dutch word"
          value={userInput}
          onChange={e=>setUserInput(e.target.value)}
        />
        <button onClick={checkAnswer}>Check</button>
        {feedback && <div style={{margin:'1em',fontSize:'1.2em'}}>{feedback}</div>}
        <button style={{marginTop:'2em'}} onClick={()=>goTo("language")}>Back</button>
      </div>
    );
  }
  return null;
}
