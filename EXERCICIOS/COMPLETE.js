//EX1
function verificarPar(numero) {
  if (numero % 2 == 0) {
    console.log("o numero 10 é par")
  } else {
    console.log("o numero 10 é ímpar")
  }
}

//EX2
verificarPar(10)


let n1 = prompt("Digita o primeiro numero");
let n2 = prompt("Digita o segundo numero");

function calcular() {
  console.log(parseInt(n1) + parseInt(n2));
  console.log(n1 - n2);
  console.log(n1 * n2);
  console.log(n1 / n2)
}

calcular()

//EX3
let i = 10;
while (i > 0) {
  console.log(i);
  i -= 1;
}

//EX4
