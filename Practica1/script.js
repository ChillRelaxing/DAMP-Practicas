//Leo Steven Hernandez Salmeron
var nombre = "Leo"
var nombre = "Steven"
console.log(nombre)

function mifuncion(){
    var apellido = "Salmeron"
    console.log(apellido)
}

mifuncion()

let numero = 10
console.log(numero)
numero = 1
console.log(numero)

if (true){
    let numero = 5
    if (true){
        let numero = 4
    }
}
console.log(numero)

const animal = "Domingo"

if (true){
    const animal = "perro"
}

let boton = document.getElementById("boton")

boton.addEventListener('click', () => {
    alert("Hola bienvenido leo")
})

let mensaje = prompt("escribe un mensaje")
console.log(mensaje)
