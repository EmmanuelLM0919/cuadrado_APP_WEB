function cuadrado() {
    let num1 = document.getElementById("num1").value.trim();

    if (num1 === "" || isNaN(num1)) {
        alert("⚠️ Ingrese un número válido");
        return;
    }

    let n = parseInt(num1);
    let resultado = Math.pow(n, 2);

    // mostrar el cuadrado en el input
    document.getElementById("resultado").value = resultado;

    // generar lista de cuadrados
    let listaDiv = document.getElementById("lista");
    listaDiv.innerHTML = "<b>Cuadrados del 1 al " + n + ":</b><br>";

    for (let i = 1; i <= n; i++) {
        listaDiv.innerHTML += `${i}² = ${i * i}<br>`;
    }
}
