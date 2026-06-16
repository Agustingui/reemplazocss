let tiempoRestante = 120;
const cambio = document.getElementById("tiempo");
const temporizador = setInterval(actualizarBarra, 1000);

function actualizarBarra() {

    tiempoRestante = tiempoRestante - 1;

    if (tiempoRestante > 60) {
        cambio.innerText = "Restan 2 minutos";
    }
    else if (tiempoRestante > 30) {
        cambio.classList.remove("verde");
        cambio.classList.add("naranja");
        cambio.innerText = "Resta 1 minuto";
    }
    else if (tiempoRestante > 0) {
        cambio.classList.remove("naranja");
        cambio.classList.add("rojo");
        cambio.innerText = `Restan ${tiempoRestante} segundos`;
    }
    else {
        cambio.classList.remove("rojo");
        cambio.classList.add("negro");
        cambio.innerText = "Tiempo agotado";

        clearInterval(temporizador);
    }
}
