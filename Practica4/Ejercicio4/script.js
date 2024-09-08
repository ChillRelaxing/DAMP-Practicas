const factorial = (numero) => {
    if (numero === 0 || numero === 1) {
        return 1;
    } else {
        return numero * factorial(numero - 1);
    }
};

console.log(factorial(5)); // Calcula el factorial de 5 (5! = 120)
