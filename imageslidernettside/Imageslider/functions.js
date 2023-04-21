const images = document.querySelectorAll('.slider-img');
const prevBtn = document.querySelector('.slider-btn-prev');
const nextBtn = document.querySelector('.slider-btn-next');

let index = 0;
let timer;

function slide() {
  images.forEach(img => img.classList.remove('active'));
  images[index].classList.add('active');
}

function next() {
  index++;
  if (index > images.length - 1) {
    index = 0;
  }
  slide();
}

function prev() {
  index--;
  if (index < 0) {
    index = images.length - 1;
  }
  slide();
}

function startSlide() {
  timer = setInterval(() => {
    next();
  }, 3000);
}

function stopSlide() {
  clearInterval(timer);
}

nextBtn.addEventListener('click', () => {
  next();
  stopSlide();
  startSlide();
});

prevBtn.addEventListener('click', () => {
  prev();
  stopSlide();
  startSlide();
});

startSlide();
