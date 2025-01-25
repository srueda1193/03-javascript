var a = 'hola mundo';

const crearPiramide = () => {
    for (let i = 0; i < 6; i++) {
        //imprimer el numero de niveles de la piramide

        let tamano = 11;
        let inicioAsterisco = Math.floor(tamano / 2);

        for (let j = 0; j < tamano; j++) {
            // reccorrer cada fila para poner los *s
            let valorInidice = j;

            var b = 'aksdjfklasjdf'
            if (valorInidice === (inicioAsterisco - i)) {

                for (let k = valorInidice; k <= (inicioAsterisco + i); k++) {
                    document.getElementById("output").innerText += "*";
                }

                const variableDefinida = 0;
            } else {
                document.getElementById("output").innerText += "#";
            }
        }
        document.getElementById("output").innerText += "\n";
        console.log(i);

    }

    const variableDefinida = 0;


    console.log(i)
}
