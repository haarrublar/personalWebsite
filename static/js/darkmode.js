// Check if the user has a color theme preference set in local storage
let colorTheme = localStorage.getItem('color-theme');

// If the user has a color theme preference, use that
if (colorTheme) {
  document.body.classList.add(colorTheme);
} else {
  // If the user doesn't have a color theme preference, check if their system prefers dark mode
  const systemPrefersDarkMode = window.matchMedia('(prefers-color-scheme: dark)').matches;

  // If the system prefers dark mode, use dark mode
  if (systemPrefersDarkMode) {
    document.body.classList.add('dark');
  }
}

// Add event listener for toggling dark mode
const toggleButton = document.getElementById('dark-mode-toggle');
toggleButton.addEventListener('click', () => {
  // Toggle the dark mode class on the <body> element
  document.body.classList.toggle('dark');

  // Update the user's color theme preference in local storage
  const colorTheme = document.body.classList.contains('dark') ? 'dark' : 'light';
  localStorage.setItem('color-theme', colorTheme);
});

function updateLogoSrc() {
  const logo = document.getElementById('latex-logo');
  const darkSrc = logo.dataset.darkSrc || '';
  const lightSrc = logo.dataset.lightSrc || '';

  if (document.body.classList.contains('dark')) {
      if (darkSrc) {
          logo.src = darkSrc;
      } else {
          console.warn('Dark source for the logo is not provided.');
      }
  } else {
      if (lightSrc) {
          logo.src = lightSrc;
      } else {
          console.warn('Light source for the logo is not provided.');
      }
  }
}