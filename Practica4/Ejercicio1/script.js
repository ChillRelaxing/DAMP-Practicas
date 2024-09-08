function generarPrimos(limite) {
    const primos = [];
    for (let i = 2; i <= limite; i++) {
        let esPrimo = true;
        for (let j = 2; j < i; j++) {
            if (i % j === 0) {
                esPrimo = false;
                break;
            }
        }
        if (esPrimo) {
            primos.push(i);
        }
    }
    return primos;
}

console.log(generarPrimos(50)); // Genera números primos hasta 50

