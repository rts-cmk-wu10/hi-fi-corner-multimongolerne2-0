// Vi vælger slider-container elementet fra HTML og gemmer det i variablen slider
const slider = document.querySelector('.slider-container');

// Vi vælger alle slider-slide elementer fra HTML og gemmer dem i variablen slides
const slides = document.querySelectorAll('.slider-slide');

// Vi vælger slider-prev elementet fra HTML og gemmer det i variablen prevArrow
const prevArrow = document.querySelector('.slider-prev');

// Vi vælger slider-next elementet fra HTML og gemmer det i variablen nextArrow
const nextArrow = document.querySelector('.slider-next');

// Vi opretter en variabel currentIndex og sætter den til 0
let currentIndex = 0;

// Funktionen showSlide viser det slide med den givne index
function showSlide(index) {
  // Vi fjerner klassen 'active' fra alle slides
  slides.forEach((slide) => {
    slide.classList.remove('active');
  });

  // Vi tilføjer klassen 'active' til slide med den givne index
  slides[index].classList.add('active');
}

// Funktionen prevSlide viser det forrige slide
function prevSlide(event) {
  // Vi forhindrer standard handlingen af klik eventet (f.eks. at følge et link)
  event.preventDefault();

  // Vi formindsker currentIndex med 1
  currentIndex--;

  // Hvis currentIndex er mindre end 0, sætter vi det til det sidste slide
  if (currentIndex < 0) {
    currentIndex = slides.length - 1;
  }

  // Vi viser slide med den nye currentIndex
  showSlide(currentIndex);
}

// Funktionen nextSlide viser det næste slide
function nextSlide(event) {
  // Vi forhindrer standard handlingen af klik eventet (f.eks. at følge et link)
  event.preventDefault();

  // Vi øger currentIndex med 1
  currentIndex++;

  // Hvis currentIndex er større eller lig med antallet af slides, sætter vi det til det første slide
  if (currentIndex >= slides.length) {
    currentIndex = 0;
  }

  // Vi viser slide med den nye currentIndex
  showSlide(currentIndex);
}

// Vi tilføjer en event listener til prevArrow, der kalder prevSlide funktionen ved klik
prevArrow.addEventListener('click', prevSlide);

// Vi tilføjer en event listener til nextArrow, der kalder nextSlide funktionen ved klik
nextArrow.addEventListener('click', nextSlide);