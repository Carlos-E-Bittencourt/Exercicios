let pares = [];
let c = 0;

for (let num = 0; num <= 30; num++) {
  if(num % 2 == 0) {
    pares[c] = num;
    c++;
  }
}

console.log("Números pares entre 0 e 30 " + pares);