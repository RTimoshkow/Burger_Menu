let burger__menu = document.querySelector('.burger__menu');
let menu = document.querySelector('.menu');

burger__menu.addEventListener("click", () => {
    burger__menu.classList.toggle("burger__menu__close");
    menu.classList.toggle("menu__show");
})
