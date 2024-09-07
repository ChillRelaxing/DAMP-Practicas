
// Solicita al usuario que ingrese tres números
let num1 = parseFloat(prompt("Ingrese el primer número:"));
let num2 = parseFloat(prompt("Ingrese el segundo número:"));
let num3 = parseFloat(prompt("Ingrese el tercer número:"));

// Valida que las entradas sean números
if (isNaN(num1) || isNaN(num2) || isNaN(num3)) {
    alert("Por favor, ingrese solo números válidos.");
} else {
    // Crea un array con los números
    let numbers = [num1, num2, num3];

    // Ordena el array en orden ascendente
    numbers.sort((a, b) => a - b);

    // Muestra los números en orden ascendente
    alert("Los números en orden ascendente son: " + numbers.join(", "));
}
