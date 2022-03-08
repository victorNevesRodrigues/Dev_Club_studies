/*passo 1 se eu tiver 1 de valor inicial e esse valor dobrar todos os dias
durante 30 dias qual o valor que eu vou ter por dia até o dia 30 */

let initial = 1;
console.log(`dia 1: R$ ${initial.toFixed(2)}`);
for(days = 2; days <= 30; days++){
    initial *= 2;
    console.log(`dia ${days}: R$ ${initial.toFixed(2)}`);
}

/*passo 2 me retorne apenas o valor por dia*/

let initial = 1;
console.log(initial);
for(days = 2; days <= 30; days++){
    initial *= 2;
    console.log(initial);
}

/*passo 3 jogue esses valores em um array*/

const numbers = [1, 2, 4, 8, 16, 32, 64, 128, 256, 512, 1024, 2048, 4096, 8192, 16384, 32768, 65536, 131072, 262144, 524288, 1048576, 2097152, 4194304, 8388608, 16777216, 33554432, 67108864, 134217728, 268435456, 536870912];

/*passo 4 me retorne o valor total ganho em 30 dias*/
const earned = numbers.reduce((acc, current) => acc + current, 0);
console.log(earned.toLocaleString())