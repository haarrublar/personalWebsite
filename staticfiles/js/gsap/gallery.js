// gsap.registerPlugin(ScrollTrigger);

// const images = gsap.utils.toArray('img');
// const loader = document.querySelector('.loader--text');
// const updateProgress = (instance) => {
//   loader.textContent = `${Math.round(instance.progressedCount * 100 / images.length)}%`;
// };

// const sections = gsap.utils.toArray('.wrapper');
// const totalWidth = sections.reduce((acc, curr) => acc + curr.offsetWidth, 0);
// const windowWidth = window.innerWidth;
// const initialScroll = totalWidth - windowWidth * 1.2; // Adjust this value to move the starting position

// gsap.set('.gallery-gsp', { x: initialScroll }); // Start from a little more to the left

// gsap.to('.gallery-gsp', {
//   x: 0,
//   duration: 0.05,
//   scrollTrigger: {
//     trigger: sections[0],
//     start: 'top top',
//     end: `+=${totalWidth}`,
//     scrub: 0.5
//   }
// });


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
/*
How to apply this GSAP
<div style="overflow: hidden;">
    <div class="gallery-gsp">
        <section class="wrapper">
          <ul>
            <li><img src="https://source.unsplash.com/random/800x600?sig=1" width="800" height="600"></li>
            <li><img src="https://source.unsplash.com/random/800x600?sig=2" width="800" height="600"></li>
            <li><img src="https://source.unsplash.com/random/800x600?sig=3" width="800" height="600"></li>
          </ul>
        </section>
        <section class="wrapper">
          <ul>
            <li><img src="https://source.unsplash.com/random/800x600?sig=4" width="800" height="600"></li>
            <li><img src="https://source.unsplash.com/random/800x600?sig=5" width="800" height="600"></li>
            <li><img src="https://source.unsplash.com/random/800x600?sig=6" width="800" height="600"></li>
          </ul>
        </section>
        <section class="wrapper">
          <ul>
            <li><img src="https://source.unsplash.com/random/800x600?sig=7" width="800" height="600"></li>
            <li><img src="https://source.unsplash.com/random/800x600?sig=8" width="800" height="600"></li>
            <li><img src="https://source.unsplash.com/random/800x600?sig=9" width="800" height="600"></li>
          </ul>
        </section>
    </div>
</div>
*/
