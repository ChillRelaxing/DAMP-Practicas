// Plantillas literales o plantillas de cadena ``
console.log('línea 1 de cadena de texto\n' + 'línea 2 de cadena de texto');

console.log(`línea 1 de la cadena de texto
línea 2 de la 
cadena de 
texto`);

let nombre = 'Leo';
console.log('\nBienvenido: \n' + nombre);

console.log(`
Bienvenido: 
${nombre}`)

console.log(`Bienvenido: ${ nombre.toUpperCase() }`)

//operaciones matematicas
// let a = 23;
// let b = 55;
//console.log(`Resultado de ${a} + ${b}: ${ a + b }`)

let estado = true
console.log(`${ estado ? 'online!' : 'offline' } ${ nombre }`);

let a = 5;
let b = 10;
console.log("Quince es " + (a + b) + " y\nno " + (2 * a + b) + ".");

console.log(`Quince es ${a + b} y
no ${2 * a + b}.`);


