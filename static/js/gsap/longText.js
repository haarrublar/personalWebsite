gsap.utils.toArray('.text').forEach((text, index) => {
    const [x, xEnd] = (index % 2) ? ['100%', (text.offsetWidth - text.parentElement.offsetWidth) * -1] : [text.offsetWidth * -1, 0];
    gsap.fromTo(text, { autoAlpha: 0, x }, {
      autoAlpha: 1,
      x: xEnd,
      scrollTrigger: {
        trigger: text.parentElement,
        scrub: 0.5
      }
    });
});

/*
How to use this GSAP animation
<div class="long-text-gsp w-full" style="overflow: hidden;">
    <div class="wrapper text">
        <div>ABCDEFGHIJKLMNOPQRSTUVWXYZ</div>
    </div>
</div>
*/