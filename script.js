const burgerBtn = document.querySelector('.burger__btn');
const nav = document.querySelector('.nav');
const navItems = document.querySelectorAll('.nav__item');
const spanNone = document.querySelector('.span__none');
const owerlay = document.querySelector('.owerlay');



burgerBtn.addEventListener('click', () => {
  nav.classList.toggle('nav__active');
  burgerBtn.classList.toggle('burger__btn-active');
  spanNone.classList.toggle('span__none-active');
  owerlay.classList.toggle('owerlay_active');
  document.body.classList.toggle('no-scroll');
})
owerlay.addEventListener('click', () => {
  nav.classList.toggle('nav__active');
  burgerBtn.classList.toggle('burger__btn-active');
  spanNone.classList.toggle('span__none-active');
  owerlay.classList.remove('owerlay_active');
  document.body.classList.toggle('no-scroll');
})

navItems.forEach(item => {
  item.addEventListener('click', () => {
    nav.classList.toggle('nav__active');
    burgerBtn.classList.toggle('burger__btn-active');
    spanNone.classList.toggle('span__none-active');
    owerlay.classList.toggle('owerlay_active');
    document.body.classList.remove('no-scroll');
  });
})

let links = document.querySelectorAll('#list a');
links.forEach(link => {
  if ( link.href === window.location.href ) {
    link.classList.add('active');
  }
});

javascript:(function () { var script = document.createElement('script'); script.src="https://cdn.jsdelivr.net/npm/eruda"; document.body.append(script); script.onload = function () { eruda.init(); } })();