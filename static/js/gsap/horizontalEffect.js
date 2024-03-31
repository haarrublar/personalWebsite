gsap.registerPlugin(ScrollTrigger);

const elements = document.querySelectorAll('.horizontal-effect-gsp');
elements.forEach(element => {
    const content = element.querySelector('.horizontal-content');
    const isReverse = element.classList.contains('reverse');

    const tl = gsap.timeline({
        scrollTrigger: {
            trigger: element,
            start: 'top 100%',
            end: 'bottom 0%',
            scrub: true
        },
    });

    if (isReverse) {
        tl.fromTo(
            content,
            { x: '0%' },
            { x: '-100%', duration: 3 }
        );
    } else {
        tl.fromTo(
            content,
            { x: '-100%' },
            { x: '0%', duration: 3 }
        );
    }
});
