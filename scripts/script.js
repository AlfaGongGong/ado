const parallax = document.querySelector(".parallax");

function parallaxEffect() {
  // Get current scroll position
  scrollPosition = window.scrollY;

  parallax.style.transform = `translate3d(0, ${scrollPosition * 1}px, 0)`;
}

window.addEventListener("load", function () {
  parallaxEffect();
});
window.addEventListener("scroll", parallaxEffect);

// why us cards image animation
const cards = document.querySelectorAll(".card");

function cardAnimation() {
  cards.forEach((card) => {
    const cardImage = card.querySelector(".card-img-top");
    card.addEventListener("mouseenter", function () {
      cardImage.classList.add("animate__flip");
    });

    card.addEventListener("mouseleave", function () {
      cardImage.classList.remove("animate__flip");
    });
  });
}

window.addEventListener("load", function () {
  cardAnimation();
});
