// objetos literales
const gato = {
    nombre: "coco",
    duerme: true,
    edad: 1,
    enemigos: ["agua", "perros"],
    otros: {
      amigos: ["michi", "chele", "milo"],
      favoritos: {
        comida: {
          fria: "pescado",
          caliente: "pollo"
        }
      }
    },
    comer(comida){
      //console.log("El gato esta comiendo")
      return `${this.nombre} esta comiendo ${comida}`
    }
  }
  
  // formas de acceder a los valores
  //console.log(gato.nombre)
  //console.log(gato.edad)
  
  //otras formas de acceder
  //console.log(gato["duerme"])
  
  // agregar valores
  gato.color = 'blanco'
  
  // actualizar 
  gato.edad = 2
  
  // eliminar
  delete gato.duerme
  
  // identificar si existe propiedad
  
  console.log(gato.hasOwnProperty("duerme"))
  
  console.log(gato.otros.amigos[0])
  
  // optional chaining (?)
  console.log(gato.otros.favorito?.comida.fria)
  
  //gato.comer()
  
  console.log(gato.comer("atun"))