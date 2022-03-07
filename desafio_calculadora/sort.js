const numeros = [1, 2, 3, 34, 5, 10, 9];
const triple = (value) => {
    const triplicado = value * 3
    return triplicado 
}
const x10 = (value) => {
    const xx10 = value * 10
    return xx10 
}
const numeroX30 = numeros.map(triple).map(x10)
console.log(numeros) // retorna [ 1, 2, 3, 34, 5, 10, 9 ]
console.log(numeroX30) // retorna [ 30, 60, 90, 1020, 150, 300, 270 ]
