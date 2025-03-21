let minPalavra = prompt("Qual a palavra em letras minúsculas?");

function capitalizar(){
  console.log(String(minPalavra[0]).toUpperCase() + String(minPalavra).slice(1))
}

capitalizar(minPalavra)
