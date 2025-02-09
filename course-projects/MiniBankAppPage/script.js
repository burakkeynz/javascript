'use strict';
const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.btn--close-modal');
const btnsOpenModal = document.querySelectorAll('.btn--show-modal');
const btnScrollTo = document.querySelector('.btn--scroll-to');
const section1 = document.querySelector('#section--1');
const nav = document.querySelector('.nav');
const tabs = document.querySelectorAll('.operations__tab');
const tabsContainer = document.querySelector('.operations__tab-container');
const tabsContent = document.querySelectorAll('.operations__content');

const openModal = function () {
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

const closeModal = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

for (let i = 0; i < btnsOpenModal.length; i++)
  btnsOpenModal[i].addEventListener('click', openModal);

btnCloseModal.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);

document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
    closeModal();
  }
});
btnScrollTo.addEventListener('click', function (e) {
  const s1coords = section1.getBoundingClientRect();
  section1.scrollIntoView({ behavior: 'smooth' });
});

//Instead of adding 100 eventListeners with page delegation, we added only 1 to the container and thanks to page delegation, we assigned 1 to numerous buttons, the memory allocation problem solved.
document.querySelector('.nav__links').addEventListener('click', function (e) {
  e.preventDefault();
  console.log(e.target); //Example: <a class="nav__link" href="#section--1">Features</a>
  //Matching strategy
  if (e.target.classList.contains('nav__link')) {
    const id = e.target.getAttribute('href'); //#section--1 etc.
    document.querySelector(id).scrollIntoView({ behavior: 'smooth' });
  }
});

//Building a Tabbed Component
tabsContainer.addEventListener('click', function (e) {
  const clicked = e.target.closest('.operations__tab');
  //Guard clause, modern way
  if (!clicked) return;

  //Removing all active parts
  tabs.forEach(tabs => tabs.classList.remove('operations__tab--active'));
  tabsContent.forEach(tabs =>
    tabs.classList.remove('operations__content--active')
  );

  //Activating the clicked button's text content and button
  clicked.classList.add('operations__tab--active');
  document
    .querySelector(`.operations__content--${clicked.dataset.tab}`)
    .classList.add('operations__content--active');
});

