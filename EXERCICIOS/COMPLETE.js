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

//EX11
function verificarSinal() {
  let num = prompt("Qual o numero que deseja verificar?")
  if(num > 0){
      console.log("O número é positivo")
  } else if(num < 0) {
      console.log("O número é negativo")
  } else {
      console.log("O número é zero")
  }
}

verificarSinal()

//EX12
function converterTemperatura() {
  const temp = prompt("qual temperatura em celius deseja converter?")
  let tempFaren = (temp*1.8)+32;
  console.log("A temperatura" + temp, "em celsius, é igual a " +tempFaren," em Fahrenheit")
}

converterTemperatura()


//EX13
let i13 = 1;
let soma = 0;

while (i <= 100) {
  soma = i + soma;
  i++;
}

console.log(soma);



//EX14
const troca = prompt("escreva uma frase que tenha a palavra azul")

function substituirPalavra() {
  console.log(troca.replace(/Azul/g || /azul/g, "Vermelho"));
}

substituirPalavra();

//EX15
let palav = prompt("Digite uma palavra");

function verificarTamanho (palav) {
  if(palav.length > 10) {
    console.log("Tem mais de 10 caracteres aí");
  } else {
    console.log("Tem menos de 10 caracteres aí");
  }
}

verificarTamanho ();



//EX16
const fruta = ["maça", "banana", "fruta do dragão", "abacate", "morango"];

console.log(fruta[2]);



//EX17
let nome = prompt("Digite seu nome");
const saudacao = "Bem-vindo(a)"

function saudacao (nome, saudacao) {
  console.log(saudacao, nome);
}

saudacao();

//EX18
let nota = prompt("Digite sua nota final");

function verificarAprovacao (nota) {
  if(nota >= 6){
    console.log("Aprovado(a)");
  } else {
    console.log("Reprovado(a)");
  }
}
  
verificarAprovacao ();

//EX19
let pares = [];
let c = 0;

for (let num = 0; num <= 30; num++) {
  if(num % 2 == 0) {
    pares[c] = num;
    c++;
  }
}

console.log("Números pares entre 0 e 30 " + pares);

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

//EX21
let numeros = [1, 2, 3];

function somarArray(){
  console.log(numeros.reduce((partialSum, a) => partialSum + a, 0))
}

somarArray()

//EX22
let numero = prompt("Qual o número?");

function dobrarNumero(){
  console.log(numero * 2);
}

dobrarNumero(numero);

//EX23
let x = 1;

function pares(x){
  while (x <= 20){
    x++;
    if (x % 2 == 0){
      console.log(x);
    }
  }
}

pares()

//EX24
let minPalavra = prompt("Qual a palavra em letras minúsculas?");

function capitalizar(){
  console.log(String(minPalavra[0]).toUpperCase() + String(minPalavra).slice(1))
}

capitalizar()

//EX25
let ano = prompt("Qual o ano?");

function anoBissexto() {
    if (ano % 4 == 0 && ano % 100 != 0){
        console.log('O ano', ano, 'é bissexto');
    }
    else{
        console.log('O ano', ano, 'não é bissexto');

    }
}

anoBissexto(ano);