function media() {
    let n1 = prompt("Qual a primeira nota?")*1;
    let n2 = prompt("Qual a segunda nota?")*1;
    let n3 = prompt("Qual a terceira nota?")*1;
    let mediaFinal = ((n1 + n2 + n3)/3.0);
    console.log("Sua média final é " + mediaFinal.toFixed(2));
}

media()