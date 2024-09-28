// Objeto estudiantes
const estudiante = {
    nombre: "Leo",
    edad: 22,
    carrera: "Ingeniería de Software",
    calificaciones: [9, 8, 5, 9, 10],
  
    // Función para calcular el promedio de calificaciones
    calcularPromedio() {
      const total = this.calificaciones.reduce((acumulador, nota) => acumulador + nota, 0);
      return total / this.calificaciones.length;
    },
  
    // Función para mostrar toda la información del estudiante
    mostrarInfo() {
      return `
        Nombre: ${this.nombre}
        Edad: ${this.edad}
        Carrera: ${this.carrera}
        Promedio: ${this.calcularPromedio()}
      `;
    }
  }
  
  // Usar la función mostrarInfo
  console.log(estudiante.mostrarInfo());
  