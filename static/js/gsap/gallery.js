gsap.registerPlugin(ScrollTrigger);

gsap.to('.scroll-content', {
  y: () => -(document.querySelector('.scroll-content').offsetHeight - document.querySelector('.scroll-container').offsetHeight),
  ease: 'none',
  scrollTrigger: {
      trigger: '.scroll-container',
      start: 'top top',
      end: 'bottom bottom',
      scrub: true
  }
});
