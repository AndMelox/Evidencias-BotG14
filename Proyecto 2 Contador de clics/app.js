let conteo = 0;

document.addEventListener("click", function() {
    conteo++;
    document.getElementById("resultado").textContent = "Clics: " + conteo;
});