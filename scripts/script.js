const parallax = document.querySelector(".parallax");
const animatedElement = document.querySelector(".animated");

animateEntrance = () => {

  animatedElement.classList.add("fadeInright");

};
animatedElement.addEventListener('scroll', animateEntrance);

function parallaxEffect() {
  // Get current scroll position
  scrollPosition = window.scrollY;

  parallax.style.transform = `translate3d(0, ${scrollPosition * 1}px, 0)`;
}

window.addEventListener("load", function () {
  parallaxEffect();
});
window.addEventListener("scroll", parallaxEffect);