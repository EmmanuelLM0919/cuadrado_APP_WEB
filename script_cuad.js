function cuadrado() {
    let num1 = document.getElementById("num1").value;
    if (num1.trim() === "" || isNaN(num1)) {
        alert("⚠️ Ingrese un número válido");
        return;
    }
    let resultado = Math.pow(num1, 2);
    document.getElementById("resultado").value = resultado;
}