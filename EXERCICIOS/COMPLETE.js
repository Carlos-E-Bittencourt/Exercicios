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

function calcular(n1, n2) {
  console.log(parseInt(n1) + parseInt(n2));
  console.log(n1 - n2);
  console.log(n1 * n2);
  console.log(n1 / n2);
}

calcular()

//EX3
let i = 10;
while (i > 0) {
  console.log(i);
  i --;
}

//EX4
let text = prompt("Qual palavra deseja inverter?")

function inverterTexto(text) {
    console.log(text.split('').reverse().join(''))
}

inverterTexto()

//EX5
let palavra = prompt('Qual palavra deseja saber o numerode caracteres?')

function contarCaracteres(palavra) {
  console.log(palavra + " - " + palavra.length + " caracteres")
}

contarCaracteres()

//EX6
const carro = {
  marca: "Koenigsegg",
  modelo: "Agera",
  ano: 2010,
  printModel: function (modelo) {
      console.log("O modelo do carro é " + this.modelo)
  }
}

carro.printModel()  

//EX7
function mensagemPersonalizada() {
  let nome = prompt("Qual seu nome?");
  const mensagem = "Olá! ";
  console.log(mensagem + nome);
}

mensagemPersonalizada()

//EX8
function media() {
  let n1 = prompt("Qual a primeira nota?")*1;
  let n2 = prompt("Qual a segunda nota?")*1;
  let n3 = prompt("Qual a terceira nota?")*1;
  let mediaFinal = ((n1 + n2 + n3)/3.0);
  console.log("Sua média final é " + mediaFinal.toFixed(2));
}

media()

//EX9
let mult3 = [];
let nmult3 = [];
let a = 0;
let b = 0;

for (let i = 1; i < 21; i++) {
    if(i % 3 == 0){
        mult3[a] = i;
        a++;
    } else {
        nmult3[b] = i;
        b++;
    }
} 

function tabelation(mult3, nmult3) {
    console.log("Multiplos de 3: " + mult3);
    console.log("Não multiplos de 3: " + nmult3);
}

tabelation()

//EX10
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