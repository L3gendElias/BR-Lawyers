const button = document.getElementById("MenuButton")
const menudesplegable = document.getElementById("NavList")
const enlaces = document.querySelectorAll(".nav__link")

button.addEventListener('click', () => {
    menudesplegable.classList.toggle("active")
});

enlaces.forEach((enlace) => {
    enlace.addEventListener("click", () => {
        menudesplegable.classList.remove("active");
    });
});