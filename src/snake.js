// snake.js

const gridSize = 13;
const word = "fiets";
const gameBoard = document.getElementById("gameBoard");
const letterProgress = document.getElementById("letterProgress");
const restartBtn = document.getElementById("restartBtn");
const pointsDisplay = document.getElementById("points");

let snake = [{ x: 6, y: 6 }];
let direction = { x: 1, y: 0 };
let nextLetterIndex = 0;
let score = 0;
let letters = [];
let fruits = [];
let gameInterval;

function createGrid() {
  gameBoard.innerHTML = "";
  for (let y = 0; y < gridSize; y++) {
    for (let x = 0; x < gridSize; x++) {
      const tile = document.createElement("div");
      tile.classList.add("tile");

      // Alternate background colors like a chessboard
      if ((x + y) % 2 === 0) {
        tile.classList.add("tile-light");
      } else {
        tile.classList.add("tile-dark");
      }

      tile.dataset.x = x;
      tile.dataset.y = y;
      gameBoard.appendChild(tile);
    }
  }
}

function draw() {
  createGrid();
  const tiles = document.querySelectorAll(".tile");

  snake.forEach(seg => {
    const tile = getTile(seg.x, seg.y);
    if (tile) tile.classList.add("snake");
  });

  letters.forEach(l => {
    const tile = getTile(l.x, l.y);
    if (tile) {
      tile.classList.add("letter");
      tile.textContent = l.char;
    }
  });

  fruits.forEach(f => {
    const tile = getTile(f.x, f.y);
    if (tile) {
      tile.classList.add("fruit");
      tile.innerHTML = f.svg;
    }
  });
}

function getTile(x, y) {
  return gameBoard.querySelector(`[data-x='${x}'][data-y='${y}']`);
}

function randomPosition() {
  return {
    x: Math.floor(Math.random() * gridSize),
    y: Math.floor(Math.random() * gridSize)
  };
}

function placeLetters() {
  letters = [];
  const distractors = "abcdefghijklmnopqrstuvwxyz".split("").filter(c => !word.includes(c));
  const extras = shuffle(distractors).slice(0, 4);
  const mix = shuffle(word.split("").map((c, i) => ({ char: c, correct: i }))).concat(
    extras.map(c => ({ char: c, correct: -1 }))
  );

  mix.forEach(l => {
    let pos;
    do {
      pos = randomPosition();
    } while (occupied(pos));
    letters.push({ ...pos, char: l.char, correct: l.correct });
  });
}

function placeFruits() {
  fruits = [];
  for (let i = 0; i < 3; i++) {
    let pos;
    do {
      pos = randomPosition();
    } while (occupied(pos));
    fruits.push({ ...pos, svg: randomFruitSVG() });
  }
}

function randomFruitSVG() {
  const fruits = ["🍎", "🍌", "🍊"];
  return fruits[Math.floor(Math.random() * fruits.length)];
}

function occupied(pos) {
  return snake.some(s => s.x === pos.x && s.y === pos.y) ||
         letters.some(l => l.x === pos.x && l.y === pos.y) ||
         fruits.some(f => f.x === pos.x && f.y === pos.y);
}

function update() {
  const head = { x: snake[0].x + direction.x, y: snake[0].y + direction.y };

  // collision with walls or self
  if (head.x < 0 || head.y < 0 || head.x >= gridSize || head.y >= gridSize || snake.some(s => s.x === head.x && s.y === head.y)) {
    return restart();
  }

  snake.unshift(head);

  // check for letter
  const letterIndex = letters.findIndex(l => l.x === head.x && l.y === head.y);
  if (letterIndex !== -1) {
    const letter = letters[letterIndex];
    if (letter.char === word[nextLetterIndex]) {
      nextLetterIndex++;
      updateProgress();
      letters.splice(letterIndex, 1);
      if (nextLetterIndex === word.length) {
        return window.location.href = "/public/congrats.html";
      }
    } else {
      return restart();
    }
  } else {
    // check for fruit
    const fruitIndex = fruits.findIndex(f => f.x === head.x && f.y === head.y);
    if (fruitIndex !== -1) {
      score += 100;
      fruits.splice(fruitIndex, 1);
      pointsDisplay.textContent = `${score}`;
    } else {
      snake.pop();
    }
  }

  draw();
}

function updateProgress() {
  letterProgress.innerHTML = word.split("").map((c, i) => i < nextLetterIndex ? c.toUpperCase() : "●").join(" ");
}

function restart() {
  snake = [{ x: 6, y: 6 }];
  direction = { x: 1, y: 0 };
  nextLetterIndex = 0;
  score = 0;
  updateProgress();
  pointsDisplay.textContent = "0";
  placeLetters();
  placeFruits();
  draw();
}

function shuffle(array) {
  return array.sort(() => Math.random() - 0.5);
}

function handleKey(e) {
  switch (e.key) {
    case "ArrowUp": direction = { x: 0, y: -1 }; break;
    case "ArrowDown": direction = { x: 0, y: 1 }; break;
    case "ArrowLeft": direction = { x: -1, y: 0 }; break;
    case "ArrowRight": direction = { x: 1, y: 0 }; break;
  }
}

function setupSwipe() {
  let startX = 0;
  let startY = 0;

  document.addEventListener("touchstart", (e) => {
    startX = e.touches[0].clientX;
    startY = e.touches[0].clientY;
  });

  document.addEventListener("touchend", (e) => {
    const dx = e.changedTouches[0].clientX - startX;
    const dy = e.changedTouches[0].clientY - startY;

    if (Math.abs(dx) > Math.abs(dy)) {
      direction = dx > 0 ? { x: 1, y: 0 } : { x: -1, y: 0 };
    } else {
      direction = dy > 0 ? { x: 0, y: 1 } : { x: 0, y: -1 };
    }
  });
}

restartBtn.addEventListener("click", restart);
document.addEventListener("keydown", handleKey);

setupSwipe();
restart();
gameInterval = setInterval(update, 200);
