
// Solicita al usuario que ingrese un número
let n = parseInt(prompt("Ingrese un número:"));

// Valida que la entrada sea un número positivo
if (isNaN(n) || n <= 0) {
  alert("Por favor, ingrese un número válido mayor que 0.");
} else {
  // Recorre los números del 1 al n
  for (let i = 1; i <= n; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
      console.log("Pachirisu God");
    } else if (i % 3 === 0) {
      console.log("Squirtle");
    } else if (i % 5 === 0) {
      console.log("Pikachu");
    } else {
      console.log(i);
    }
  }
}
