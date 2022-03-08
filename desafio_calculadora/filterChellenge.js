// retorne o numero de vezes que o 99 aparece
const numbers = [1, 9, 99, 50 , 99 , 99, 20, 88, 99];
const only99 = numbers.filter(number => number == 99);
console.log(only99) 
/* retornou [ 99, 99, 99, 99 ] ou seja,
retornou todos indices cujo valor era igual a 99 */
console.log(only99.length) 
// retornou 4