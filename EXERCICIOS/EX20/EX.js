//EX20
function contarVogais() {
    let palavra = prompt("Qual palavra deseja saber a quantidade de vogais?");
    letras = palavra.split('');
    let numVoga = 0;
    for (let i = 0; i <= palavra.length; i++) {
        if ((letras[i] == 'a') || (letras[i] == 'e') || (letras[i] == 'i') || (letras[i] == 'o') || (letras[i] == 'u')) {
            numVoga++;
        }
    }
    console.log("O número de vogais da palavra é: " + numVoga);
}

contarVogais()