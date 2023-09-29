function Slider() {
  const slides = document.querySelectorAll('.slider-slide');
  const prevButton = document.querySelector('.slider-prev');
  const nextButton = document.querySelector('.slider-next');
  let currentSlide = 0;

  function showSlide(index) {
    slides.forEach((slide) => {
      slide.classList.remove('active');
    });
    slides[index].classList.add('active');
  }

  function prevSlide(event) {
    event.preventDefault();
    currentSlide--;
    if (currentSlide < 0) {
      currentSlide = slides.length - 1;
    }
    showSlide(currentSlide);
  }

  function nextSlide(event) {
    event.preventDefault();
    currentSlide++;
    if (currentSlide >= slides.length) {
      currentSlide = 0;
    }
    showSlide(currentSlide);
  }

  prevButton.addEventListener('click', prevSlide);
  nextButton.addEventListener('click', nextSlide);

  showSlide(currentSlide);
}

Slider();