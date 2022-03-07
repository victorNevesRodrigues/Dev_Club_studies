// crie uma calculadora utilizando uma arrow function
const sum = (num1, num2, simbol) => {
    switch (simbol) {
        case "+":
            return console.log(num1 + num2)
            break;
        case "-":
            return console.log(num1 - num2)
            break;
        case "*":
            return console.log(num1 * num2)
            break;
        case "/":
            return console.log(num1 / num2)
            break;
            default:
                console.log("coloque um operador valido")
                break;
    }
}
sum(1, 2, "+")
sum(1, 2, "-")
sum(1, 2, "*")
sum(1, 2, "/")
sum(1, 2)

const numeros = [1, 99, 11, 2, 3, 34, 5];
for(numero of numeros){
console.log(numero + 12);
}
console.log(numeros.sort())