import '../scss/main.scss';

// Slider functionality
document.addEventListener('DOMContentLoaded', () => {
  const slider = document.getElementById('price-slider');
  const value = document.getElementById('slider-value');
  if (slider && value) {
    slider.addEventListener('input', () => {
      value.textContent = slider.value + '%';
    });
  }

  // Steps dots dynamic
  const getDotsCount = () => (window.innerWidth <= 992 ? 3 : 5);

  const renderDots = () => {
    const dotsBlocks = document.querySelectorAll('.steps__dots');
    const count = getDotsCount();
    dotsBlocks.forEach(block => {
      block.innerHTML = '';
      for (let i = 0; i < count; i++) {
        const dot = document.createElement('span');
        dot.className = 'steps__dot';
        block.appendChild(dot);
      }
    });
  };

  // прелоадер
  setTimeout(() => {
    const preloader = document.getElementById('ssr-preloader');
    if (preloader) preloader.classList.add('hide');
    setTimeout(() => preloader && preloader.remove(), 100);
  }, 100);

  renderDots();
  window.addEventListener('resize', renderDots);
});