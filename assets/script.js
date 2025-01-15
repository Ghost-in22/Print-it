const slides = [
  {
    image: "./assets/images/slideshow/slide1.jpg",
    tagLine: "Impressions tous formats <span>en boutique et en ligne</span>",
  },
  {
    image: "./assets/images/slideshow/slide2.jpg",
    tagLine:
      "Tirages haute définition grand format <span>pour vos bureaux et events</span>",
  },
  {
    image: "./assets/images/slideshow/slide3.jpg",
    tagLine: "Grand choix de couleurs <span>de CMJN aux pantones</span>",
  },
  {
    image: "./assets/images/slideshow/slide4.png",
    tagLine: "Autocollants <span>avec découpe laser sur mesure</span>",
  },
];

let arrowLeft = document.querySelector(".arrow_left");
let arrowRight = document.querySelector(".arrow_right");
let containerDots = document.querySelector(".dots");
let activeSlideIndex = 0;
let imageCarousel = document.querySelector(".banner-img");

arrowLeft.addEventListener("click", () => {
  activeSlideIndex--;
  imageCarousel.src = slides[activeSlideIndex].image;
});

arrowRight.addEventListener("click", () => {
  activeSlideIndex++;
  imageCarousel.src = slides[activeSlideIndex].image;
});

for (i = 0; i < slides.length; i++) {
  let newDot = document.createElement("span");
  newDot.classList.add("dot");
  if (i === 0) {
    newDot.classList.add("dot_selected");
  }
  containerDots.appendChild(newDot);
}
