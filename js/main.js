let humburger = document.querySelector(".hamburger");
let navList = document.getElementById("nav_list");

humburger.addEventListener("click", (event) => {
  let isOpen = navList.classList.contains("active");
  if (!isOpen) {
    navList.classList.add("active");
    event.target.classList.add("active");
  } else {
    navList.classList.remove("active");
    event.target.classList.remove("active");
  }
});
