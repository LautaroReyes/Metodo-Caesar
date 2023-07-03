let frase = prompt("Ingrese una frase");
let desplazamiento = 2;
let fraseEncriptada = ConvertirFrase(frase, desplazamiento);

function ConvertirFrase(frase, cantDesplazamiento) {
    let abc = 'abcdefghijklmnopqrstuvwxyz';
    let encriptado = '';

    for (let i = 0; i < frase.length; i++) {
        let letra = frase[i];
        let indexLetra = abc.indexOf(letra.toLowerCase());

        if (indexLetra != -1) {
            let nuevo = (indexLetra + cantDesplazamiento) % abc.length;
            let nuevaLetra = abc[nuevo];
            if (letra == letra.toUpperCase()) {
                nuevaLetra = nuevaLetra.toUpperCase();
            }
            encriptado += nuevaLetra;
        }
        else {
            encriptado += letra;
        }
    }
    return encriptado;
}

document.write("Frase encriptada: " + fraseEncriptada);
