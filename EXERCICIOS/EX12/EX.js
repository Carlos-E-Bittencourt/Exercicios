//EX12
function converterTemperatura() {
    const temp = prompt("qual temperatura em celius deseja converter?")
    let tempFaren = (temp*1.8)+32;
    console.log("A temperatura" + temp, "em celsius, é igual a" +tempFaren,"em Fahrenheit")
}