const numeros = [45, 4, 9, 16, 25]

/*for( i = 0; i < 5; i++){
    console.log(numeros[i]);
}*/

numeros.forEach(valor => console.log(valor));

/*for( i = 0; i < 5; i++){
    console.log(numeros[i] * 2);
}*/

//map() é um método que cria um novo array com elementos
// retornar poe uma callback function
let numeros2 = numeros.map(valor => valor * 2);
numeros2.forEach(valor => console.log(valor));

//filter() é um método que retorna um novo array com
//elementos que atende a um determinado critério

const numeros3 = numeros.filter(valor => valor > 18)
numeros3.forEach(valor => console.log(valor));

//reduce() produz um único valor


console.log(
    numeros.reduce((total, valor) => total)
);

//A propriedade length retotna um número correspondente à quantidade
//de elementos de um array
console.log(numeros.length);
numeros.length = 10;
console.log(numeros);
console.log(numeros[6]);
numeros.length = 4;
console.log(numeros);
numeros.length = 5;
console.log(numeros);

//O método push() acrescenta um valor no fim do array
numeros.push(25);
numeros
console.log(numeros);

//O método pop() remove um elemento no fim do array
numeros.pop();
console.log(numeros)

numeros.pop();
numeros.push(25);
console.log(numeros);