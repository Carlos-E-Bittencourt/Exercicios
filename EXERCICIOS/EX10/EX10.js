function verificarPalindromo() {
    let palavra = prompt("Qual palavra deseja saber se é um palindromo");
    let palavracontra = palavra.split('').reverse().join('');
    
    if(palavra == palavracontra) {
        console.log("Essa palavra é um palindromo");
    } else {
        console.log("Essa palavra não é um palindromo");
    }
}

verificarPalindromo()