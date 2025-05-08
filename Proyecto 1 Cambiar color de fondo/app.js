let colorInicial = true;

document.getElementById("cambiarFondo").addEventListener("click", function() {
    if (colorInicial) {
        document.body.style.backgroundColor = "lightblue";
    } else {
        document.body.style.backgroundColor = "white";
    }
    colorInicial = !colorInicial;
});