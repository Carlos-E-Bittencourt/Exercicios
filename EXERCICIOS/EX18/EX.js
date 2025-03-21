let nota = prompt("Digite sua nota final");

function verificarAprovacao (nota) {
  if(nota >= 6){
    console.log("Aprovado(a)");
  } else {
    console.log("Reprovado(a)");
  }
}
  
verificarAprovacao ();
