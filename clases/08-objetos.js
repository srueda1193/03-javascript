// Objetos

let persona = {
    nombre: 'Byron',
    apellido: 'Realpe',
    edad: 28,
    estadoCivil: 'Soltero',
    estatura: 1.70,
    tieneHijos: true,
    hijos: [
        {
            nombre: 'Luis'
        },
        {
            nombre: 'Paula'
        }
    ]
}

console.log(persona.hijos[0].nombre);

document.getElementById('output').innerText = persona.edad;


let automovil = new Object();

automovil.motor = 2.0;
automovil.marca = 'Chevrolet'
automovil.capacidad = 5;
automovil.tipoGasolina = 'Super'
automovil.modelo = null;

console.log(automovil);



//Ejercicios

/**
 * Crea un objeto con las propiedades: precio, color y memoria.
Asígnale el objeto a una variable llamada computadora.
 */

let computadora = {
    precio: 1000,
    color: 'black',
    memoria: '2000GB'
}

/**
 * 1. Crea un objeto llamado Persona usando un constructor y dale las siguientes
    propiedades: nombre, apellido y edad.
    2. Crea dos instancias del objeto
    a. Primera instancia p1 : “Michael”, “Jordan”, 49.
    b. Segunda instancia p2 : “Lara”, “bili”, 74.
 */


let persona1 = new Object(
    {
        firstName: 'Sebastian',
        lastName: 'Rueda',
        age: 28
    }
);

let persona2 = new Object(
    {
        firstName: 'Jhoann',
        lastName: 'Vanegas',
        age: 28
    }
);

function Persona(firstName, lastName, age){
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
}

let person1 = new Persona('Michael', 'Valdivieso', 36);
let person2 = new Persona('Edwin', 'Chavez', 72);

console.log(person1)
console.log(person2)