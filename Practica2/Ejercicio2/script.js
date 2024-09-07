let number = 100;
let decrementBy = 5; // Comienza decrementando en 5

while (number >= 1) {
    console.log(number); // Muestra el número actual
    number -= decrementBy; // Decrementa el número actual
    decrementBy = (decrementBy === 5) ? 3 : 5; // Alterna entre 5 y 3
}


