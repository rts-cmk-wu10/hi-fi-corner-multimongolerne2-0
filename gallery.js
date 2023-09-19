const slider = document.querySelector('.slider');
const prevButton = document.querySelector('.prev-button');
const nextButton = document.querySelector('.next-button');

let currentIndex = 0;
let totalSlides = slider.children.length;

prevButton.addEventListener('click', () => {
  currentIndex = (currentIndex - 1 + totalSlides) % totalSlides;
  updateSlider();
});

nextButton.addEventListener('click', () => {
  currentIndex = (currentIndex + 1) % totalSlides;
  updateSlider();
});

function updateSlider() {
  const slideWidth = slider.children[0].offsetWidth;
  const transformValue = `translateX(${-currentIndex * slideWidth}px)`;

  slider.style.transform = transformValue;
};