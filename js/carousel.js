const slidesContainer = document.querySelector('.slides');
const prevButton = document.querySelector('.prev-btn');
const nextButton = document.querySelector('.next-btn');

const slideCount = document.querySelectorAll('.slide').length;
let slideIndex = 0;

prevButton.addEventListener('click', () => {
  slideIndex--;
  updateSlidePosition();
});

nextButton.addEventListener('click', () => {
  slideIndex++;
  updateSlidePosition();
});

function updateSlidePosition() {
  if (slideIndex < 0) {
    slideIndex = slideCount - 1;
  } else if (slideIndex >= slideCount) {
    slideIndex = 0;
  }
  slidesContainer.style.transform = `translateX(-${slideIndex * 100}%)`;
}
