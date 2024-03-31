// Blinking cursor animation
let cursor = gsap.to('.text-effect .cursor', {
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
let words = [];
let currentWordIndex = 0;
let currentCharIndex = 0;
let isRevealing = true;

// Function to update the words array based on the input text
function updateWords() {
  // Get the text content of the '.text' element and trim any leading or trailing whitespace
  const textContent = document.querySelector('.text').textContent.trim();
  // Check if the textContent is not empty
  if (textContent) {
    // Clear the existing words array by setting its length to 0
    words.length = 0;
    // Split the textContent into an array of words using newline character '\n' as the separator
    // Iterate over each word in the array and trim any leading or trailing whitespace before pushing it to the words array
    textContent.split('\n').forEach(word => words.push(word.trim()));
  }
}

updateWords(); // Initial update

document.querySelector('.text').addEventListener('input', updateWords); // Update


// Function to reveal text
function revealText() {
  const currentWord = words[currentWordIndex];
  const text = document.querySelector('.text');
  const cursor = document.querySelector('.cursor');

  if (currentCharIndex <= currentWord.length) {
    text.textContent = currentWord.slice(0, currentCharIndex);
    cursor.textContent = '_';
    currentCharIndex++;
  } else {
    text.textContent = currentWord;
    cursor.textContent = '';
    isRevealing = false; // Switch to unrevealing mode
  }
}

// Function to unreveal text
function unrevealText() {
  const currentWord = words[currentWordIndex];
  const text = document.querySelector('.text');
  const cursor = document.querySelector('.cursor');

  if (currentCharIndex >= 0) {
    text.textContent = currentWord.slice(0, currentCharIndex);
    cursor.textContent = '_';
    currentCharIndex--;
  } else {
    text.textContent = '';
    cursor.textContent = '';
    currentWordIndex = (currentWordIndex + 1) % words.length;
    currentCharIndex = 0;
    isRevealing = true; // Switch back to revealing mode
  }
}

// Interval for revealing text
setInterval(() => {
  if (isRevealing) {
    TweenMax.to('.text', 0.1, { opacity: 1, yoyo: true }); // Add yoyo effect to reveal
    revealText();
  }
}, 100); // Update text every 1 second for revealing mode

// Interval for unrevealing text
setInterval(() => {
  if (!isRevealing) {
    TweenMax.to('.text', 0.2, { opacity: 1, yoyo: true }); // Add yoyo effect to unreveal
    unrevealText();
  }
}, 200); // Update text every 2 seconds for unrevealing mode
