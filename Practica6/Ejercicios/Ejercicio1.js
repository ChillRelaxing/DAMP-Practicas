// Objeto carro
const carro = {
    marca: "Toyota",
    modelo: "Corolla",
    año: 2020,
  
    // Función para retornar la descripción del carro
    descripcion() {
      return `El carro es un ${this.marca} ${this.modelo} del año ${this.año}.`;
    }
  }
  
  // Usar la función descripción
  console.log(carro.descripcion());
  