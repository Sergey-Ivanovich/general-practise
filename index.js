const menuButtonElement = document.querySelector("#menu-button");
const hiddenMenuElement = document.querySelector(".dropdown-menu");
menuButtonElement.addEventListener("click", toggleMenu);
const showPixelElement = document.querySelector(".displayPixel");
const backgroundElement = document.querySelector("body");
const rightArrow = document.querySelector("#right");
const leftArrow = document.querySelector("#left");
const carouselElements = document.querySelectorAll(".carousel-element");
let activeCarousel = 1;

console.log(carouselElements);

leftArrow.addEventListener("click", moveLeft);
rightArrow.addEventListener("click", moveRight);

function moveRight() {
  carouselElements.forEach(function (element, index) {
    if (element.classList.contains("show")) {
      element.classList.remove("show");
      activeCarousel = index + 1;
    }
  });
  carouselElements[activeCarousel].classList.add("show");
  if (activeCarousel == 3) {
    rightArrow.classList.add("hidden");
  }
  showArrow();
  console.log(activeCarousel);
}

function moveLeft() {
  carouselElements.forEach(function (element, index) {
    if (element.classList.contains("show")) {
      element.classList.remove("show");
      activeCarousel = index - 1;
    }
  });
  carouselElements[activeCarousel].classList.add("show");
  if (activeCarousel === 0) {
    leftArrow.classList.add("hidden");
  }
  showArrow();
  console.log(activeCarousel);
}

function showArrow() {
  if (activeCarousel !== 3 && activeCarousel !== 0) {
    rightArrow.classList.remove("hidden");
    leftArrow.classList.remove("hidden");
  }
}

function toggleMenu() {
  hiddenMenuElement.classList.toggle("hidden");
}

function showScroll() {
  showPixelElement.innerHTML = window.scrollY;
  if (window.scrollY > 700) {
    backgroundElement.classList.add("turnRed");
  } else {
    backgroundElement.classList.remove("turnRed");
  }
}

setInterval(showScroll, 1);
