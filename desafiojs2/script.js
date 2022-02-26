// retorne todos os names do objeto dentro do array com o sobrenome da cruz
const person = [
    { name: "peter", age: 29, gender: "male" }, 
    { name: "lucas", age: 46, gender: "male" }, 
    { name: "maria", age: 22, gender: "female" }, 
]
person.forEach((student) => {
    console.log(student.name + " da cruz")
})
