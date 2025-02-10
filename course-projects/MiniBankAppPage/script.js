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
//Menu fade animation
const handleHover = function (e) {
  if (e.target.classList.contains('nav__link')) {
    const link = e.target;
    const siblings = link.closest('.nav').querySelectorAll('.nav__link');
    const logo = link.closest('.nav').querySelector('img');

    siblings.forEach(links => {
      if (links !== link) {
        links.style.opacity = this;
      }
    });
    logo.style.opacity = this;
  }
};

//Passing into handler
nav.addEventListener('mouseover', handleHover.bind(0.5));
nav.addEventListener('mouseout', handleHover.bind(1));

stick navigation: The Intersection Observer API
const header = document.querySelector('.header');
const navHeight = nav.getBoundingClientRect().height; //to get rootMargin px dynamically
const stickNav = function (entries) {
  const [entry] = entries;
  console.log(entry);
  if (!entry.isIntersecting) nav.classList.add('sticky');
  else {
    nav.classList.remove('sticky');
  }
};

const headerObserver = new IntersectionObserver(stickNav, {
  root: null,
  threshold: 0,
  rootMargin: `-${navHeight}px`,
});
headerObserver.observe(header);

//Reveal sections as approached
const allSections = document.querySelectorAll('.section');

//When revealsection is called by observer, we loop entries and remove section--hidden if it is intersecting and letting observer unobserve after section--hidden removed
const revealSection = function (entries, observer) {
  entries.forEach(entry => {
    //Guard clause
    if (!entry.isIntersecting) return;

    entry.target.classList.remove('section--hidden');
    observer.unobserve(entry.target);
  });
};
const sectionObserver = new IntersectionObserver(revealSection, {
  root: null,
  threshold: 0.15,
});

allSections.forEach(function (section) {
  sectionObserver.observe(section);
});

//Lazy Loading Images
const allImages = document.querySelectorAll('img[data-src]');
const revealImage = function (entries, observer) {
  const [entry] = entries;
  //Guard clause
  if (!entry.isIntersecting) return;
  //Replace src with data-stc
  entry.target.src = entry.target.dataset.src;
  //We want to remove blur when the loading event is triggered, which is loading is finished
  entry.target.addEventListener('load', function () {
    entry.target.classList.remove('lazy-img');
  });
  observer.unobserve(entry.target);
};

const imgObserver = new IntersectionObserver(revealImage, {
  root: null,
  threshold: 0,
  rootMargin: '200px',
});

allImages.forEach(function (images) {
  imgObserver.observe(images);
});

