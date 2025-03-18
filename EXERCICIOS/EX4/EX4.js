let text = prompt("Qual palavra deseja inverter?")

function inverterTexto() {
    console.log(text.split('').reverse().join(''))
}

inverterTexto()