let mult3 = [];
let ñmult3 = [];
let a = 0;
let b = 0;

for (let i = 1; i < 21; i++) {
    if(i % 3 == 0){
        mult3[a] = i;
        a++;
    } else {
        ñmult3[b] = i;
        b++;
    }
} 

function tabelation() {
    console.log("Multiplos de 3: " + mult3);
    console.log("Não multiplos de 3: " + ñmult3);
}

tabelation()