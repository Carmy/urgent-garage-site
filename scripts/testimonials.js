
document.addEventListener('DOMContentLoaded', () => {
  const slides = document.querySelectorAll('.testimonial-slider .slide');
  const nextBtn = document.querySelector('.slider-controls .next');
  const prevBtn = document.querySelector('.slider-controls .prev');
  let index = 0;

  function showSlide(i) {
    slides.forEach(slide => slide.style.display = 'none');
    slides[i].style.display = 'block';
  }

  nextBtn.addEventListener('click', () => {
    index = (index + 1) % slides.length;
    showSlide(index);
  });

  prevBtn.addEventListener('click', () => {
    index = (index - 1 + slides.length) % slides.length;
    showSlide(index);
  });

  showSlide(index);
});
