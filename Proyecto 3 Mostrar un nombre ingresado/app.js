document.getElementById("mostrar").addEventListener("click", function() {
    let nombre = document.getElementById("nombre").value;

    if (nombre.trim() !== "") {
        document.getElementById("saludo").textContent = "Hola, " + nombre + "!";
    } else {
        document.getElementById("saludo").textContent = "Por favor, ingresa un nombre.";
    }
});