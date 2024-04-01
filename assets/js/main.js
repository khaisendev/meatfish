AOS.init({ duration: 1000, offset: 100,easing: 'ease-in-out', once: true});
/// HEADER TOGGLE
const burger = document.querySelector(".header__toggle");
  const menu = document.querySelector(".header__menu");
    const menuLinks = document.querySelectorAll(".header__nav-link");
let isMenuOpen = false;
burger.addEventListener("click", (event) => {
  event.preventDefault();
    isMenuOpen = !isMenuOpen;
      menu.classList.toggle("active", isMenuOpen);
      burger.classList.toggle("active", isMenuOpen);
});
menuLinks.forEach((link) => {
  link.addEventListener("click", (event) => {
    event.preventDefault();
    const targetId = link.getAttribute("href").substring(1);
    const targetElement = document.getElementById(targetId);
      if (targetElement) {
         targetElement.scrollIntoView({
           behavior: "smooth",
       });
      }
      isMenuOpen = false;
        menu.classList.remove("active");
      burger.classList.remove("active");
  });
});
