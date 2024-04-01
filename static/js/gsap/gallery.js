gsap.registerPlugin(ScrollTrigger);

gsap.to('.scroll-children', {
  y: () => document.querySelector('.scroll-parent').offsetHeight - document.querySelector('.scroll-children').offsetHeight,
  // ease: 'none',
  duration: 3,
  scrollTrigger: {
    trigger: '.scroll-parent',
    start: 'top 85%',
    end: 'bottom 25%',
    scrub: true,
    // markers: {
    //   start: () => document.querySelector('.scroll-parent'),
    //   end: () => document.querySelector('.scroll-children')
    // }
  }
});