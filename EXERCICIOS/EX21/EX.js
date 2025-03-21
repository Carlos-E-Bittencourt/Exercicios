let array = [1, 2, 3];

function somarArray(){
  console.log(array.reduce((partialSum, a) => partialSum + a, 0))
}

somarArray(array)