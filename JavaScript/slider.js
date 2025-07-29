var imagenes = [
    "../images/lawyer1.png",
    "../images/lawyer2.png",
    "../images/lawyer3.png",
    "../images/lawyer4.png",
    "../images/lawyer5.png"
];
document.Imagen.src = imagenes[0];

var SliderDerecha = document.querySelector(".slider-derecho");
var SliderIzquierda = document.querySelector(".slider-izquierdo");
var Contador = 0;

// BOTON DERECHO DEL SLIDER
function MoverDerecha() {
    Contador++;
    if(Contador > imagenes.length - 1){
        Contador = 0;
    };
    document.Imagen.src = imagenes[Contador];
}
SliderDerecha.addEventListener("click", function(){
    clearInterval(Intervalo);
    MoverDerecha();
    Intervalo = setInterval(MoverDerecha, 5000);
})

// BOTON IZQUIERDO DEL SLIDER
function MoverIzquierda(){
    Contador--;
    if(Contador < 0){
        Contador = imagenes.length - 1;
    };
    document.Imagen.src = imagenes[Contador];
}
SliderIzquierda.addEventListener("click", function(){
    clearInterval(Intervalo);
    MoverIzquierda();
    Intervalo = setInterval(MoverDerecha, 5000);
})

// AUTOMATIZACION DEL SLIDER
var Intervalo = setInterval(MoverDerecha, 5000);