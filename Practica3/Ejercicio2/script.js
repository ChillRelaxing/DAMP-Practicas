// Crea un array con algunos elementos
let array = ["manzana", "banana", "cereza", "dátil", "higo"];

// Solicita al usuario que ingrese el índice del elemento
let index = parseInt(prompt("Ingrese el índice del elemento que desea encontrar (0-4):"));

// Verifica si el índice está dentro del rango del array
if (index >= 0 && index < array.length) {
    // Muestra el elemento en el índice proporcionado
    console.log("El elemento en el índice " + index + " es: " + array[index]);
} else {
    // Muestra un mensaje de error si el índice no es válido
    console.log("Índice fuera de rango. Por favor, ingrese un índice válido entre 0 y " + (array.length - 1) + ".");
}