let humburger = document.querySelector(".hamburger");
let navList = document.getElementById("nav_list");

humburger.addEventListener("click", (event) => {
  let isOpen = navList.classList.contains("active");
  if (!isOpen) {
    navList.classList.add("active");
    event.target.style.cssText = `background: url(../images/icons/close.svg) center no-repeat;`;
  } else {
    navList.classList.remove("active");
    event.target.style.cssText = `background: url(../images/icons/menu.svg) center no-repeat;`;
  }
});

const swiper = new Swiper(".swiper-container", {
  direction: "horizontal",
  loop: false,
  spaceBetween: 50,
  slidesPerView: "auto",
  centeredSlides: true,
  autoplay: {
    delay: 2500,
  },
  effect: "coverflow",
  coverflowEffect: {
    rotate: 50,
    stretch: 0,
    depth: 100,
    modifier: 1,
    slideShadows: true,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});
