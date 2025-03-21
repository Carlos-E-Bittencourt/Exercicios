const troca = prompt("escreva uma frase que tenha a palavra azul")

function substituirPalavra() {
  console.log(troca.replace(/Azul/g || /azul/g, "Vermelho"));
}

substituirPalavra();