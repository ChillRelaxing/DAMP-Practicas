// Crea un array con los números del 1 al 50
let numbers = [];
for (let i = 1; i <= 50; i++) {
    numbers.push(i);
}

// Crea un nuevo array para almacenar los resultados
let doubledNumbers = [];

// Multiplica cada número por 2 y almacena el resultado en el nuevo array
for (let i = 0; i < numbers.length; i++) {
    doubledNumbers.push(numbers[i] * 2);
}

// Muestra el nuevo array en la consola
console.log(doubledNumbers);

