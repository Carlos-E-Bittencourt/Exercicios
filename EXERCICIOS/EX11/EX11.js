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