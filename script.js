const button = document.getElementById("MenuButton");
const menudesplegable = document.getElementById("NavList");
const enlaces = document.querySelectorAll(".nav__link");
const carta = document.getElementById("imagenlogo");
const cartavolteada = document.getElementById("cartavolteada");

button.addEventListener("click", () => {
  menudesplegable.classList.toggle("active");
});

carta.addEventListener("click", () => {
  carta.classList.toggle("active");
  cartavolteada.classList.toggle("active");
});

cartavolteada.addEventListener("click", () => {
  carta.classList.remove("active");
  cartavolteada.classList.remove("active");
});

enlaces.forEach((enlace) => {
  enlace.addEventListener("click", () => {
    menudesplegable.classList.remove("active");
  });
});
