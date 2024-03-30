
if (!CSS.supports('animation-timeline: scroll()') && matchMedia('(prefers-reduced-motion: no-preference)')) {
  gsap.registerPlugin(ScrollTrigger);

  const scrub = 0.5;
  const trigger = 'main';

  gsap.set('p > span', {
    '--progress': 0,
    backgroundPositionX: 'calc(-200vmax + (var(--progress) * 200vmax)), calc(-200vmax + (var(--progress) * 200vmax)), 0',
    color: 'transparent',
  });

  gsap.to('p > span', {
    '--progress': 1,
    duration: 3, // Set the duration to 3 seconds
    scrollTrigger: {
      trigger,
      scrub,
      start: 'top top',
      end: 'top top-=75%'
    }
  });

  gsap.to('p > span', {
    color: 'white',
    duration: 3, // Set the duration to 3 seconds
    scrollTrigger: {
      trigger,
      scrub,
      start: 'top top-=75%',
      end: 'bottom bottom'
    }
  });
}

/*
How to apply this GSAP Animation
<div class="text-reveal bg-slate-300">
    <section>
      <p>
        <span contenteditable=true>Responsive Animated Text Reveals with CSS Scroll-Driven Animations.</span>
      </p>
    </section>
</div>
*/