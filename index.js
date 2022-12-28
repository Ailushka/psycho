/* -------------------- */
/*     Smooth links     */
/* -------------------- */

const smoothLinks = document.querySelectorAll('a[href^="#"]');
for (let smoothLink of smoothLinks) {
    smoothLink.addEventListener('click', function (e) {
        e.preventDefault();
        const id = smoothLink.getAttribute('href');

        document.querySelector(id).scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
    });
};

/* -------------------- */
/*     Touch slider     */
/* -------------------- */

const slider = document.querySelector('.touch-slider');
let isDown = false;
let startX;
let scrollLeft;

slider.addEventListener('mousedown', e => {
  isDown = true;
  slider.classList.add('active');
  slider.classList.remove('grab');
  slider.classList.add('grabbing');
  startX = e.pageX - slider.offsetLeft;
  scrollLeft = slider.scrollLeft;
});
slider.addEventListener('mouseleave', _ => {
  isDown = false;
  slider.classList.remove('active');
  slider.classList.add('grab');
  slider.classList.remove('grabbing');
});
slider.addEventListener('mouseup', _ => {
  isDown = false;
  slider.classList.remove('active');
  slider.classList.add('grab');
  slider.classList.remove('grabbing');
});
slider.addEventListener('mousemove', e => {
  if (!isDown) return;
  e.preventDefault();
  const x = e.pageX - slider.offsetLeft;
  const SCROLL_SPEED = 2;
  const walk = (x - startX) * SCROLL_SPEED;
  slider.scrollLeft = scrollLeft - walk;
});

slider.classList.add('grab');
slider.classList.remove('grabbing');
