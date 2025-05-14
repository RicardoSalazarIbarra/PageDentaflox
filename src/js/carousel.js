const slides = document.querySelector('.c-slides');
const indicators = document.querySelectorAll('.i-indicator');
const totalSlides = indicators.length;
let currentIndex = 0;
let interval = setInterval(nextSlide, 5000);

// ------------------ Cambiar slide manualmente ------------------
function goToSlide(index) {
  currentIndex = index;
  updateCarousel();
  resetInterval();
}

function nextSlide() {
  currentIndex = (currentIndex + 1) % totalSlides;
  updateCarousel();
}

function goToPreviousSlide() {
  currentIndex = (currentIndex - 1 + totalSlides) % totalSlides;
  updateCarousel();
}

function updateCarousel() {
  slides.style.transform = `translateX(-${currentIndex * 100}%)`;
  indicators.forEach(ind => ind.classList.remove('active'));
  indicators[currentIndex].classList.add('active');
}

function resetInterval() {
  clearInterval(interval);
  interval = setInterval(nextSlide, 5000);
}

// ------------------ Indicadores ------------------
indicators.forEach(indicator => {
  indicator.addEventListener('click', () => {
    const index = parseInt(indicator.getAttribute('data-index'));
    goToSlide(index);
  });
});

// ------------------ Swipe en móvil ------------------
let startX = 0;
let isDragging = false;
let threshold = 50;

slides.addEventListener('touchstart', (e) => {
  startX = e.touches[0].clientX;
  isDragging = true;
});

slides.addEventListener('touchmove', (e) => {
  if (!isDragging) return;
  const currentX = e.touches[0].clientX;
  const diff = currentX - startX;

  if (Math.abs(diff) > threshold) {
    if (diff > 0) {
      goToPreviousSlide();
    } else {
      nextSlide();
    }
    isDragging = false;
    resetInterval();
  }
});

slides.addEventListener('touchend', () => {
  isDragging = false;
});

// ------------------ Drag con mouse ------------------
slides.addEventListener('mousedown', (e) => {
  startX = e.clientX;
  isDragging = true;
});

slides.addEventListener('mousemove', (e) => {
  if (!isDragging) return;
  const currentX = e.clientX;
  const diff = currentX - startX;

  if (Math.abs(diff) > threshold) {
    if (diff > 0) {
      goToPreviousSlide();
    } else {
      nextSlide();
    }
    isDragging = false;
    resetInterval();
  }
});

slides.addEventListener('mouseup', () => {
  isDragging = false;
});

slides.addEventListener('mouseleave', () => {
  isDragging = false;
});
