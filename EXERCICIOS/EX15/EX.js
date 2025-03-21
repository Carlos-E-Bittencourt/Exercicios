let palav = prompt("Digite uma palavra");

function verificarTamanho (palav) {
  if(palav.length > 10) {
    console.log("Tem mais de 10 caracteres aí");
  } else {
    console.log("Tem menos de 10 caracteres aí");
  }
}

verificarTamanho ();