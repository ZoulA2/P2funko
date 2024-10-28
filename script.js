const carousel = document.querySelector('.carousel');
let isDragging = false;
let startX;
let scrollLeft;


carousel.addEventListener('mousedown', (e) => {
  isDragging = true; 
  startX = e.pageX - carousel.offsetLeft; 
  scrollLeft = carousel.scrollLeft; 
});


document.addEventListener('mouseup', () => {
  isDragging = false; 
});


carousel.addEventListener('mousemove', (e) => {
  if (!isDragging) return; 
  const x = e.pageX - carousel.offsetLeft; 
  const walk = (x - startX) * 2; 
  carousel.scrollLeft = scrollLeft - walk; 
});


carousel.style.cursor = 'default';
