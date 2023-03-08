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
    return `Mi nombre es ${nombre}`
}
console.log(miNombre(nombre));

// Convierte las siguientes funciones en funciones flecha:

const test2 = () => {
    console.log("Función test 2 ejecutada.");
}

const test1 = (callback) => {
    callback()
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

const mayor25 = gente.filter(persona => persona.edad > 25)
mayor25.forEach(persona => console.log(persona))

console.log(mayor25)

// Crea un array con la gente que empieza por J.

const nombresConJ = gente.filter(persona => persona.nombre.charAt(0) === "J")
nombresConJ.forEach(persona => console.log(persona))

console.log(nombresConJ)

// 3. Map

const mayores25 = gente.filter(persona => persona.edad > 25)
const nombresMayor25 = mayores25.map(persona => persona.nombre)

console.log(nombresMayor25)

// Crea un array con la gente que empieza por J. 

const nombresConJ2 = gente.filter(persona => persona.nombre.charAt(0) === "J")
const nombresConJMap = nombresConJ2.map(persona => persona.nombre)

console.log(nombresConJMap)

// Dado el siguiente array, crear otro que sea el resultado de elevar cada número a si mismo:

const numbers = [ 4, 5, 6, 7, 8, 9, 10];

const numerosElevados = numbers.map(num => num ** num)

console.log(numerosElevados)

// 4. Filter

// Crea un segundo array que devuelva los impares

const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const numerosImpares = numeros.filter(numeros => numeros % 2 !== 0)
console.log(numerosImpares)

// Dado el siguiente array, genera un segundo array que filtre los platos veganos y saque una sentencia como la del ejemplo:

const foodList = [
    {
      name: 'Tempeh',
      isVeggie: true
    },
    {
      name: 'Cheesbacon burguer',
      isVeggie: false
    },
    {
      name: 'Tofu burguer',
      isVeggie: true
    },
    {
      name: 'Entrecot',
      isVeggie: false
    }
  ];
  /* [
      'Que rico Tempeh me voy a comer!',
      'Que rica Tofu burguer me voy a comer!'
     ]
  */

     const esVeggie = foodList.filter(foodList => foodList.isVeggie = true)
     const fraseVegana = esVeggie.map(foodList => `Que rico ${foodList.name} me voy a comer!`)
     console.log(esVeggie)