// Get the navbar elements
const navbarToggler = document.getElementById('navbar-toggler');
const navbarMenu = document.getElementById('navbar-menu');

// Add event listener for toggling the navbar menu
navbarToggler.addEventListener('click', () => {
  console.log('click');
  navbarMenu.classList.toggle('hidden');
});