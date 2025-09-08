const reveals = document.querySelectorAll('.reveal');

function checkVisibility() {
  reveals.forEach(reveal => {
    const { top, bottom } = reveal.getBoundingClientRect();
    const isVisible = top < window.innerHeight && bottom > 0;    

    if (isVisible) {
      reveal.classList.add('reveal_active');
    } else {
      reveal.classList.remove('reveal_active');
    }
  });
}
window.addEventListener('scroll', checkVisibility);
checkVisibility();