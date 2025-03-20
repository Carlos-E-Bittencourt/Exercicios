console.log("Hello Word!");

//variavel
let nome = "CostaGold";
const idade = 23;

//função
function saudacao() {
    console.log("Olá, " + nome);
}

//chamando a função
saudacao();


/*
Novo código
*/

//Estruturas de Controle
if (idade >= 18) {
    console.log("Você é maior de idade")
} else {
    console.log("Você é menos de idade")
}

// Laços de Repetição
for (let i = 0; i < 5; i++) {
    console.log("Número " + i);
}   


//Arrays
let frutas = ["Maçã", "Banana", "Laranja"];
console.log(frutas[0]);//Acessando primeiro elemento do array

//objetos
let pessoa = {
    nome: "Carlos",
    idade : 16,
    saudacaoV2: function() {
        console.log("Oi, meu nome é " + this.nome);
    }
}

// Chamando a função dentro do objeto
pessoa.saudacaoV2()