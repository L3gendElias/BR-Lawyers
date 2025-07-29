const carta = document.getElementById("imagenlogo");
const cartavolteada = document.getElementById("cartavolteada");

carta.addEventListener("click", () => {
  carta.classList.toggle("active");
  cartavolteada.classList.toggle("active");
});

cartavolteada.addEventListener("click", () => {
  carta.classList.remove("active");
  cartavolteada.classList.remove("active");
});