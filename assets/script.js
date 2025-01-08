const slides = [
  {
    image: "slide1.jpg",
    tagLine: "Impressions tous formats <span>en boutique et en ligne</span>",
  },
  {
    image: "slide2.jpg",
    tagLine:
      "Tirages haute définition grand format <span>pour vos bureaux et events</span>",
  },
  {
    image: "slide3.jpg",
    tagLine: "Grand choix de couleurs <span>de CMJN aux pantones</span>",
  },
  {
    image: "slide4.png",
    tagLine: "Autocollants <span>avec découpe laser sur mesure</span>",
  },
];

let flecheGauche = document.querySelector(".arrow_left");
let flecheDroite = document.querySelector(".arrow_right");
let containerDots = document.querySelector(".dots");

flecheGauche.addEventListener("click", () => {
  console.log("Click gauche OK");
});

flecheDroite.addEventListener("click", () => {
  console.log("Click droit OK");
});

for (i = 0; i < slides.length; i++) {
  let newDot = document.createElement("span");
  newDot.classList.add("dot");
  if (i === 0) {
    newDot.classList.add("dot_selected");
  }
  containerDots.appendChild(newDot);
}
