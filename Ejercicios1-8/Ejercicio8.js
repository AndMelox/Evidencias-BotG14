// 8. Contador regresivo (bucle for)
function iniciarContador() {
    const container = document.createElement('div');
    container.style.textAlign = 'center';
    container.style.fontSize = '24px';
    document.body.appendChild(container);

    for (let i = 5; i >= 1; i--) {
        setTimeout(() => {
            container.textContent = i;
        }, (5 - i) * 1000);
    }

    setTimeout(() => {
        container.textContent = "¡Despegue!";
    }, 5000);
}