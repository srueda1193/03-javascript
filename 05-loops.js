//imprimir los numeros del 1 al 100

// let texto = 0
// for (let index = 0; index < 10; index++) {
//     console.log(index);
//     console.log(document.getElementById("miCiclo").innerText);
//     texto += index + 1
//     document.getElementById("miCiclo").innerText = texto;
// }

// Suma de 5 numeros
const calcularSuma = () => {
    let suma = 0;

    for (let i = 0; i < 5; i++) {
        console.log(suma);
        let inputData = prompt(`Por favor ingrese el ${i + 1} digito`);
        let numberInputData = parseInt(inputData);

        console.log(typeof (numberInputData))
        console.log(isNaN(numberInputData));

        if (isNaN(numberInputData)) {
            alert('Solo se permiten numeros, por favor intente de nuevo')
            i--;
        } else {
            suma += numberInputData;
            console.log(suma);
        }
    }

    document.getElementById("sum").innerHTML = suma;
}


const example = () => {
    let string = "";

    for (let i = 0; i < 10; i++) {
        for (let j = 0; j < (10 - i); j++) {
            string += "*";
        }
        string += "\n";
    }
    document.getElementById("output").innerText = string;
}

const crearTablaMultiplicar = () => {

    let result = 0;

    for (let i = 0; i < 10; i++) {
        console.log(`Tabla del ${i + 1}`);

        for (let j = 0; j < 10; j++) {
            result = (i + 1) * (j + 1);
            console.log(` ${i + 1} * ${j + 1} = ${result}`)
        }

        console.log("\n");

    }
}