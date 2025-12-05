// アニメーション
const target = document.querySelectorAll('.js-fadein');
const options = {
  root: null,
  rootMargin: '0px',
  threshold: 0.3
};
const observer = new IntersectionObserver((entries, observer) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('is-show');
    }
  });
}, options);

target.forEach((t) => {
  observer.observe(t);
});