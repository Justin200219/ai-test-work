// word_learning.js

(function() {
  // 1) Grab the four option buttons and the “Check/Next” link
  const options = Array.from(document.querySelectorAll('.option-box'));
  const checkBtn = document.querySelector('.next-btn');

  // 2) Read the correct answer from data-correct="…"
  const wordElem = document.querySelector('.word');
  const correctAnswer = wordElem.dataset.correct.trim();

  // 3) State variables
  let selectedOption = null;
  let answeredCorrectly = false;

  // 4) When the user taps any option:
  options.forEach(option => {
    option.addEventListener('click', () => {
      if (answeredCorrectly) return; 
      
      // Clear previous selection/feedback
      options.forEach(o => {
        o.classList.remove('selected', 'wrong', 'correct');
      });

      option.classList.add('selected');  // turn it gray via CSS
      selectedOption = option;
    });
  });

  // 5) When the user taps “Check”:
  checkBtn.addEventListener('click', function(event) {
    // If no option is selected, block navigation and do nothing:
    if (!selectedOption) {
      event.preventDefault();
      return;
    }

    // If they already got it right, let the <a> navigate as normal
    if (answeredCorrectly) {
      return;
    }

    // Otherwise, block the link until they pick the correct one
    event.preventDefault();

    const guess = selectedOption.innerText.trim();
    if (guess === correctAnswer) {
      // —— CORRECT ——
      selectedOption.classList.remove('selected');
      selectedOption.classList.add('correct');       // turns green via CSS

      // Turn “Check” → “Next” and make the button green
      checkBtn.innerText = 'Next';
      checkBtn.classList.add('correct-btn');

      answeredCorrectly = true;
    } else {
      // —— WRONG ——
      selectedOption.classList.remove('selected');
      selectedOption.classList.add('wrong');         // turns red via CSS

      // Clear selection so they must pick again
      selectedOption = null;
    }
  });
})();
