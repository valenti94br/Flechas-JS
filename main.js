// 1. Funciones flecha

// Convierte la siguiente función en una función flecha:

const saludar = () => {
    return "Hola"
}
console.log(saludar())

// Convierte la siguiente función en una función flecha en línea:

const division = (a, b) => {
    return a / b;
}
console.log(division(14, 2))

// Convierte la siguiente función en una función flecha:

const nombre = "Valentí"
const miNombre = (nombre) => {
    return `Mi nombre es ${nombre}`;
}
console.log(miNombre(nombre));

// Convierte las siguientes funciones en funciones flecha:

const test2 = () => {
    console.log("Función test 2 ejecutada.");
}

const test1 = (callback) => {
    callback();
}
test1(test2)

console.log(test2())

// 2. Foreach

let gente = [
    {
      nombre: "Jamiro",
      edad: 45,
    },
    {
      nombre: "Juan",
      edad: 35,
    },
    {
      nombre: "Paco",
      edad: 34,
    },
    {
      nombre: "Pepe",
      edad: 14,
    },
    {
      nombre: "Pilar",
      edad: 24,
    },
    {
      nombre: "Laura",
      edad: 24,
    },
    {
      nombre: "Jenny",
      edad: 10,
    },
  ];

// Crea un array con la gente mayor de 25 años y muéstralo por consola.

const mayor25 = gente.filter(persona => persona.edad > 25);
mayor25.forEach(persona => console.log(persona))

console.log(mayor25)

// Crea un array con la gente que empieza por J.

const nombresConJ = gente.filter(persona => persona.nombre.charAt(0) === "J");
nombresConJ.forEach(persona => console.log(persona))

console.log(nombresConJ)

// 3. Map

