const header = document.getElementById("header"),
  navMenu = document.getElementById("nav-menu"),
  navOpen = document.getElementById("nav-open"),
  navClose = document.getElementById("nav-close"),
  navLinks = document.querySelectorAll(".nav__link");

/* Change header style on scroll
---------------------------------------*/
window.addEventListener("scroll", () => {
  if (window.scrollY > 80) {
    header.classList.add("header--scroll");
  } else {
    header.classList.remove("header--scroll");
  }
});

/* Navigation Menu
---------------------------------------*/

// Open the nav menu
navOpen.addEventListener("click", () => {
  navMenu.classList.add("nav__menu--open");
});

// Close the nav menu
navClose.addEventListener("click", () => {
  navMenu.classList.remove("nav__menu--open");
});

// Close the nav menu when the user clicks on each nav link
navLinks.forEach((link) => {
  link.addEventListener("click", () => {
    navMenu.classList.remove("nav__menu--open");
  });
});

/* Destination swiper 
----------------------------------------*/
let swiper = new Swiper(".destination__wrapper", {
  loop: true,
  slidesPerView: "auto",
  centeredSlides: true,
  spaceBetween: 32,
  grabCursor: true,
  navigation: {
    nextEl: ".swiper__next",
    prevEl: ".swiper__prev",
  },
});

/* Play and Pause Video 
---------------------------------------*/
const video = document.getElementById("video-tour"),
  videoBtn = document.getElementById("video-btn"),
  videoIcon = document.getElementById("video-icon");

function videoState() {
  if (video.paused) {
    // Play the video
    video.play();
    // Replace the play icon
    videoIcon.classList.replace("ri-play-fill", "ri-pause-fill");
  } else {
    // Pause the Video
    video.pause();
    // Replace the pause icon
    videoIcon.classList.replace("ri-pause-fill", "ri-play-fill");
  }
}

// Replace the pause icon when the video ends
video.addEventListener("ended", () => {
  videoIcon.classList.replace("ri-pause-fill", "ri-play-fill");
});

videoBtn.addEventListener("click", videoState);

/* 
Scrolltop 
----------------------------------------------*/
const scrollTop = document.getElementById("scrolltop");

function showScrollTop() {
  if (window.scrollY > 150) {
    scrollTop.classList.add("scrolltop--show");
  } else {
    scrollTop.classList.remove("scrolltop--show");
  }
}

window.addEventListener("scroll", showScrollTop);

/* 
Active link on scroll section */

function addActiveLink() {
  const section = document.querySelectorAll("section[id]");
  section.forEach((section) => {
    const scrollY = window.scrollY,
      sectionTop = section.offsetTop - 150,
      sectionHeight = section.offsetHeight,
      sectionId = section.getAttribute("id");

    if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
      document
        .querySelector(".nav__link[href*=" + sectionId + "]")
        .classList.add("nav__link--active");
    } else {
      document
        .querySelector(".nav__link[href*=" + sectionId + "]")
        .classList.remove("nav__link--active");
    }
  });
}

window.addEventListener("scroll", addActiveLink);

// ScrollReveal Animation
const sr = ScrollReveal({
  distance: "100px",
  duration: 2000,
  delay: 400,
  reset: false,
});

sr.reveal(".home__content, .about__img, .offer__content", { origin: "left" });
sr.reveal(".home__img, .about__content, .offer__img", { origin: "right" });
sr.reveal(
  ".destination__wrapper, .video__content, .video__info, .newsletter__wrapper"
);
sr.reveal(".discover__item", { interval: 200, origin: "top" });
sr.reveal(".footer__content", { interval: 150 });
