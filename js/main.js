let slideIndex = 0;
const slides = document.querySelectorAll('.slider img');

function showSlide(index) {
  slides.forEach(slide => {
    slide.style.transform = `translateX(-${index * 30}%)`;
  });
}

function nextSlide() {
  slideIndex = (slideIndex + 1) % slides.length;
  showSlide(slideIndex);
}

function prevSlide() {
  slideIndex = (slideIndex - 1 + slides.length) % slides.length;
  showSlide(slideIndex);
}

showSlide(slideIndex);