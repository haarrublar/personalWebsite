const screenWidth = window.innerWidth;
const screenHeight = window.innerHeight;
gsap.fromTo(
  '.text',
  { y: -screenHeight, x: -screenWidth },
  { y: screenHeight, x: screenWidth, duration: 4 }
);


/*
How to use this GSAP animation
<div class="long-text-gsp w-full" style="overflow: hidden;">
    <div class="wrapper text">
        <div>ABCDEFGHIJKLMNOPQRSTUVWXYZ</div>
    </div>
</div>
*/