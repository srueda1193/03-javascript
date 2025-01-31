let myArray = ["Rojo", "verde", "azul"];
console.log(myArray);

let arrayMixto = [ 9 ,  "hola mundo", false , NaN , undefined];
console.log(arrayMixto);

let emptyArray = [];
console.log(emptyArray);

let myNewArray = [];
for (let i = 0; i < 10; i++) {
    myNewArray[i] = i + 1 ;   
}
console.log(myNewArray[4]);

let array1 = ['a', 'b', 'c'];
let array2 = ['d', 'e', 'f'];

let array3 = array1.concat(array2);
console.log(array3);


let arrayJoin = new Array("Hola", "Mi", "nombre", "es", "Sebastian");
let myString = arrayJoin.join("");
console.log(myString);

//Tomar el ultimo elemento del array y quitarlo
let arr1 = [1,2,3,4,5,6,7,8,9];
let stringPop = arr1.pop();
console.log(stringPop);
console.log(arr1);

//Push insertar un elemento en la ultima posicion del array
let arr2 = [1,2,3,4,5,6,7,8];
arr2.push(9);
console.log(arr2);

// Reversar un array

arr2.reverse();
console.log(arr2);

//ordenar un array
arr2.sort();
console.log(arr2);


// Eliminar el primer elemento del array 

arr2.shift();
console.log(arr2);

// saber el indice de un elemento
console.log(arr2.indexOf(7));



let position = arr2.indexOf(7);
arr2.splice(position,2);
console.log(arr2);

arr2.splice(0, 0,"1")
console.log(arr2);

//tarea
const months = ['Jan', 'March', 'April', 'June', 'June'];



//cortar elementos de un array
const animals = ['ant', 'bison', 'camel', 'duck', 'elephant' ];
console.log(animals.slice(2));
console.log(animals.slice(2, 4));
console.log(animals.slice(1, 5));
console.log(animals.slice(-2));
console.log(animals.slice(2, -1));

console.log(animals);

add(3, 5);

function add(a , b){
    console.log(a +b);
    return a + b;
}

add(3, 6);



function maxBetween3Numb(n1, n2, n3){
    let maxNumber = Math.max(n1,n2,n3);
    console.log(maxNumber);
}

const maxBetween3Number = function(n1,n2,n3){
    let maxNumber = Math.max(n1,n2,n3);
    console.log(maxNumber);
}

const maxBetween3Numbers = (n1,n2,n3) => {
    let maxNumber = Math.max(n1,n2,n3);
    console.log(maxNumber);
}

/**
 * 
 * Escribe una función de declaración que acepte un arreglo y retorne el número
más grande.
B. Invoca la función de A usando arr = [1, 6, 2, 9] y alerta el número más grande.
 */

function getMaxNumber(arreglo){
    let maxNumber = Math.max(...arreglo);
    console.log(maxNumber);
    return maxNumber;
}

const getMaxNumber1 = function(array) {
    // console.log(Math.max(...array));
    alert(Math.max(...array));
    return Math.max(...array);
}

const getMaxNumber2 = (array) => {
    // console.log(Math.max(...array));
    alert(Math.max(...array));
    return Math.max(...array);
}

function findNumberIntoArray(array , number){
    let isNumberPresent = array.indexOf(number);
    return isNumberPresent >= 0 ? console.log(true) : console.log(false) ;
}


function findNumberIntoArray2(array , number){
    let isNumberPresent = array.find((elemento) => elemento == number);
    return isNumberPresent >= 0 ? console.log(true) : console.log(false) ;
}

const findNumberIntoArray3 = function(array, number){
    let isNumberPresent = array.find((elemento) => elemento == number);
    return isNumberPresent >= 0 ? console.log(true) : console.log(false) ;
}

const findNumberIntoArray4 = (array, number) => {
    let isNumberPresent = array.find((elemento) => elemento == number);
    return isNumberPresent >= 0 ? console.log(true) : console.log(false) ;
}


function minBetween3Numb(n1, n2, n3){
    let minNumber = Math.min(n1,n2,n3);
    console.log(minNumber);
}