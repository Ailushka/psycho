/* -------------------- */
/*      Mobile menu     */
/* -------------------- */

const burgerButton = document.querySelector('.burger');
const nav = document.querySelector('.nav');
const menu = document.querySelector('.nav-list');
const menuLinks = document.querySelectorAll('.nav-list__link');

burgerButton.addEventListener("click", function () {
    burgerButton.classList.toggle("burger_active");
    nav.classList.toggle("nav_opened");
    nav.classList.toggle("transition");
    menu.classList.toggle("nav-list_mobile");
    document.querySelector('.page').classList.toggle('no-scroll');
    document.querySelector('html').classList.toggle('no-scroll');
});

menuLinks.forEach(menuLink => {
  menuLink.addEventListener('click', () => {
    burgerButton.classList.remove("burger_active");
    nav.classList.remove("nav_opened");
    nav.classList.remove("transition");
    menu.classList.remove("nav-list_mobile");
    document.querySelector('.page').classList.remove('no-scroll');
    document.querySelector('html').classList.remove('no-scroll');
  })
});



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
/*         Popup        */
/* -------------------- */

const closeButtons = document.querySelectorAll('.button_type_close');
const diplomasPopup = document.querySelector('.popup_type_diplomas');
const diplomaImageName = diplomasPopup.querySelector('.diplomas-image');
const diplomaImageLink = diplomasPopup.querySelector('.diplomas-image');
const diplomas = document.querySelectorAll('.diplomas-list__item');
const ESCAPE = 27;

function openPopUp(popup) {
  popup.classList.add('popup_opened');
  popup.classList.add('transition');
  document.querySelector('.page').classList.add('no-scroll');
  document.addEventListener('click', closePopUpByOverlay);
  document.addEventListener('keydown', closePopUpByEsc);

}

function closePopUp(popup) {
  popup.classList.remove('popup_opened');
  popup.classList.remove('transition');
  document.querySelector('.page').classList.remove('no-scroll');
  document.removeEventListener('click', closePopUpByOverlay);
  document.removeEventListener('keydown', closePopUpByEsc);
}

window.onbeforeunload = function () {
  window.scrollTo(0, 0);
}

function closePopUpByOverlay(evt) {
  if (evt.target.classList.contains('popup_opened')) {
    closePopUp(evt.target);
  }
}

function closePopUpByEsc(evt) {
  const popupOpened = document.querySelector('.popup_opened');
  if (evt.keyCode === ESCAPE) {
    closePopUp(popupOpened);
  }
}

diplomas.forEach((item) => {
  item.addEventListener('click', (evt) => {
    const diplomaToOpen = evt.target.closest('.diplomas-list__item');

    const openedDiplomaImageName = diplomaToOpen.querySelector('.slide__image').alt;
    const openedDiplomaImageLink = diplomaToOpen.querySelector('.slide__image').src;

    diplomaImageName.alt = openedDiplomaImageName;
    diplomaImageLink.src = openedDiplomaImageLink;

      openPopUp(diplomasPopup);
  });
});

closeButtons.forEach((item) => {
  item.addEventListener('click', (evt) => {
      const popUpToClose = evt.target.closest('.popup');
      closePopUp(popUpToClose);
  });
});
