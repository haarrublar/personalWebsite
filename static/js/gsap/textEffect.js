// Blinking cursor animation
gsap.to('.cursor', {
  opacity: 0, // Set cursor opacity to 0
  ease: 'power2.inOut', // Use power2.inOut easing function
  repeat: -1 // Repeat indefinitely
});

// Timeline for box animation
let boxTl = gsap.timeline();

boxTl.to('.box', {
  duration: 1,
  width: '25vw', // Increase width to 25vw
  delay: 0.5, // Delay animation by 0.5 seconds
  ease: 'power4.inOut' // Use power4.inOut easing function
})
.from('.hi', {
  duration: 1,
  y: '7vw', // Move element 7vw on the y-axis
  ease: 'power3.out', // Use power3.out easing function
  onComplete: () => masterTl.play() // Play master timeline on complete
}, '-=1') // Use relative position '-=1' to start 1 second earlier
.to('.box', {
  duration: 1,
  height: '7vw', // Increase height to 7vw
  ease: 'elastic.out' // Use elastic.out easing function
})
.to('.box', {
  duration: 2,
  autoAlpha: 0.5, // Set opacity to 0.5
  yoyo: true, // Use yoyo effect
  repeat: -1, // Repeat indefinitely
  ease: "rough({template: none.out, strength: 1, points: 20, taper: 'none', randomize: true, clamp: false})" // Use rough easing function
});

// Text animation
gsap.to('.hi', {
  duration: 2,
  color: 'white', // Change text color to white
  backgroundColor: 'mediumspringgreen', // Change background color to mediumspringgreen
  yoyo: true, // Use yoyo effect
  repeat: -1, // Repeat indefinitely
  ease: 'power1.inOut' // Use power1.inOut easing function
});

// Update words array based on input text
// Update words array based on input text
let allWords = [];
let currentWordIndices = [];
let currentCharIndices = [];
let isRevealing = [];

// Function to update the words array based on the input text
function updateWords() {
  // Get all '.text' elements and iterate over them
  const textElements = document.querySelectorAll('.text');
  allWords = [];
  currentWordIndices = [];
  currentCharIndices = [];
  isRevealing = [];

  textElements.forEach((textElement, index) => {
    const textContent = textElement.textContent.trim();
    if (textContent) {
      const words = textContent.split('\n').map(word => word.trim());
      allWords.push(words);
      currentWordIndices.push(0);
      currentCharIndices.push(0);
      isRevealing.push(true);
    }
  });
}

updateWords();

// Initial update
const textElements = document.querySelectorAll('.text');
textElements.forEach(textElement => {
  textElement.addEventListener('input', updateWords);
});

// Function to reveal text
function revealText(index) {
  const textElement = textElements[index];
  const currentWord = allWords[index][currentWordIndices[index]];

  if (currentCharIndices[index] <= currentWord.length) {
    textElement.textContent = currentWord.slice(0, currentCharIndices[index]);
    currentCharIndices[index]++;
  } else {
    textElement.textContent = currentWord;
    isRevealing[index] = false; // Switch to unrevealing mode
  }
}

// Function to unreveal text
function unrevealText(index) {
  const textElement = textElements[index];
  const currentWord = allWords[index][currentWordIndices[index]];

  if (currentCharIndices[index] >= 0) {
    textElement.textContent = currentWord.slice(0, currentCharIndices[index]);
    currentCharIndices[index]--;
  } else {
    textElement.textContent = '';
    currentWordIndices[index] = (currentWordIndices[index] + 1) % allWords[index].length;
    currentCharIndices[index] = 0;
    isRevealing[index] = true; // Switch back to revealing mode
  }
}

// Interval for revealing text
setInterval(() => {
  textElements.forEach((textElement, index) => {
    if (isRevealing[index]) {
      revealText(index);
    }
  });
}, 100); // Update text every 0.1 second for revealing mode

// Interval for unrevealing text
setInterval(() => {
  textElements.forEach((textElement, index) => {
    if (!isRevealing[index]) {
      unrevealText(index);
    }
  });
}, 200); // Update text every 0.2 second for unrevealing mode
