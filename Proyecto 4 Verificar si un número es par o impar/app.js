document.getElementById("verificar").addEventListener("click", function() {
    let numero = parseInt(document.getElementById("numero").value);

    if (!isNaN(numero)) {
        let mensaje = (numero % 2 === 0) ? "Es par" : "Es impar";
        document.getElementById("resultado").textContent = mensaje;
    } else {
        document.getElementById("resultado").textContent = "Por favor, ingresa un número válido.";
    }
});