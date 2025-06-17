import React from "react";
import ReactDOM from "react-dom";
import App from "./App";

ReactDOM.render(<App />, document.getElementById("root"));


const languages = [
  { label: "Arabic", sub: "العربية" },
  { label: "Turkish", sub: "" },
  { label: "Kurdish", sub: "کوردی" },
  { label: "Kurdish", sub: "سۆرانی" },
  { label: "Tigrinia", sub: "" },
  { label: "Somalian", sub: "" },
  { label: "Spanish", sub: "" },
  { label: "Urdu", sub: "" },
  { label: "Farsi", sub: "" },
  { label: "Bengali", sub: "" },
  { label: "Chinese", sub: "" },
  { label: "Amharic", sub: "" },
  { label: "Russian", sub: "" },
  { label: "Ukrainian", sub: "" },
  { label: "Punjabi (India)", sub: "" },
  { label: "Punjabi", sub: "ਪੰਜਾਬੀ" },
  { label: "English", sub: "" }
];

const formEl   = document.getElementById("langForm");
const startBtn = document.getElementById("start");
let selectedLabel = null;

function renderLanguages() {
  formEl.innerHTML = "";
  languages.forEach((lang, i) => {
    const id = `lang-${i}`;
    const label = document.createElement("label");
    label.className = "language-item";
    label.htmlFor = id;
    label.innerHTML = `
      <input type="radio" name="language" id="${id}" value="${i}" />
      <span>${lang.label}</span>
      <small>${lang.sub}</small>
    `;
    // when a radio is checked, highlight its label
    label.querySelector("input").addEventListener("change", () => {
      // clear old selection
      document
        .querySelectorAll(".language-item.selected")
        .forEach(el => el.classList.remove("selected"));
      label.classList.add("selected");
      startBtn.disabled = false;
      selectedLabel = lang;
    });
    formEl.appendChild(label);
  });
}

startBtn.addEventListener("click", () => {
  if (!selectedLabel) return;
  // replace alert with your navigation logic
  alert(`You chose: ${selectedLabel.label}${selectedLabel.sub ? " — " + selectedLabel.sub : ""}`);
});

// initial injection
renderLanguages();
