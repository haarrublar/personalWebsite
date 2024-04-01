gsap.registerPlugin(ScrollTrigger);

const outerDiv = document.querySelector('.outer-div');
const innerDiv = document.querySelector('.inner-div');

const tl = gsap.timeline({
  scrollTrigger: {
    trigger: outerDiv,
    start: 'top top',
    end: 'bottom bottom',
    scrub: true,
  },
});

tl.to(innerDiv, {
  y: () => `-${outerDiv.offsetHeight - innerDiv.offsetHeight}`,
  ease: 'none',
});