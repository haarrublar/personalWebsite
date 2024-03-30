gsap.registerPlugin(ScrollTrigger);

const images = gsap.utils.toArray('img');
const loader = document.querySelector('.loader--text');
const updateProgress = (instance) => {
  loader.textContent = `${Math.round(instance.progressedCount * 100 / images.length)}%`;
};

const sections = gsap.utils.toArray('.wrapper');
const totalWidth = sections.reduce((acc, curr) => acc + curr.offsetWidth, 0);
const windowWidth = window.innerWidth;
const initialScroll = totalWidth - windowWidth * 1.2; // Adjust this value to move the starting position

gsap.set('.gallery-gsp', { x: initialScroll }); // Start from a little more to the left

gsap.to('.gallery-gsp', {
  x: 0,
  duration: 2,
  scrollTrigger: {
    trigger: sections[0],
    start: 'top top',
    end: `+=${totalWidth}`,
    scrub: 0.5
  }
});
