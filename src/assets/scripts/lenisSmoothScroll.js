import "@src/assets/styles/lenis.css";

import Lenis from "lenis";

// Script to handle Lenis library settings for smooth scrolling
const lenis = new Lenis({
  duration: 0.3, // Adjust the duration as needed (in seconds)
  easing: (t) => 1 - (1 - t) * (1 - t), // Example easing function
});

function raf(time) {
  lenis.raf(time);
  requestAnimationFrame(raf);
}

requestAnimationFrame(raf);
