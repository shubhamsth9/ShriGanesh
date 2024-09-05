const celebrateBtn = document.getElementById('celebrateBtn');
const mainImg = document.getElementById("mainImg");
const text = document.querySelector('.typing-text');
const buttonAndText = document.getElementById("buttonAndText");
const lastMsg = document.getElementById('lastMsg');

celebrateBtn.addEventListener('click', () => {
    //disable button
    celebrateBtn.disabled = true;
    buttonAndText.style.display = 'none';

    // trigger confetti
    confetti({
        particleCount: 100,
        spread: 70,
        origin: { x: 0.5, y: 0.45 }
    });

    // button animation
    celebrateBtn.style.transform = 'scale(0.95)';
    setTimeout(() => {
        celebrateBtn.style.transform = 'scale(1)';
    }, 100);

    zoomInOut();

    setTimeout(async () => {
        text.style.display = 'block';
        setTyper(text, words);
    }, 2000);
    // text.style.display = 'none';

});

function zoomInOut() {
    mainImg.style.display = 'inline';
    mainImg.classList.add('zoomIn');
    setTimeout(() => {
        mainImg.classList.add('zoomOut');
        setTimeout(() => {
            celebrateBtn.disabled = false;
            mainImg.style.display = 'none';
            mainImg.classList.remove('zoomIn');
            mainImg.classList.remove('zoomOut');
            text.style.display = 'none';
            lastMsg.style.display = 'block';
        }, 1800);
        
    }, 23000);
}

// typing effect
const words = [
  "Shri Ganeshaya Namah 🙏",
  "Lord Ganesha has blessed your new project! ✨",
  "You must achieve great things! 💪"
];

function setTyper(element, words) {

  const LETTER_TYPE_DELAY = 75;
  const WORD_STAY_DELAY = 2000;

  const DIRECTION_FORWARDS = 0;
  const DIRECTION_BACKWARDS = 1;

  var direction = DIRECTION_FORWARDS;
  var wordIndex = 0;
  var letterIndex = 0;

  var wordTypeInterval;

  startTyping();

  function startTyping() {
    wordTypeInterval = setInterval(typeLetter, LETTER_TYPE_DELAY);
  }

  function typeLetter() {
        if (wordIndex == words.length) {
            return;
            }
        const word = words[wordIndex];

        if (direction == DIRECTION_FORWARDS) {
            letterIndex++;

            if (letterIndex == word.length) {
                direction = DIRECTION_BACKWARDS;
                clearInterval(wordTypeInterval);
                setTimeout(startTyping, WORD_STAY_DELAY);
            }

            } else if (direction == DIRECTION_BACKWARDS) {
            letterIndex--;

            if (letterIndex == 0) {
                nextWord();
            }
        }

    const textToType = word.substring(0, letterIndex);

    element.textContent = textToType;
  }

  function nextWord() {

    letterIndex = 0;
    direction = DIRECTION_FORWARDS;
    wordIndex++;

    if (wordIndex == words.length) {
      return;
    }
  }
}

lastMsg.addEventListener('click', () => {
    lastMsg.style.display = 'none';
    buttonAndText.style.display = 'block';
})