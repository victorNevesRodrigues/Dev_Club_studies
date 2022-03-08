const students = [
    {name: "Rodolfo", textgrade: 7},
    {name: "Maria", textgrade: 8},
    {name: "João", textgrade: 5},
    {name: "Bruno", textgrade: 9},
    {name: "Carla", textgrade: 3},
    {name: "Ana", textgrade: 2},
    {name: "Julio", textgrade: 10}
]
const classResult = (aluno) => {
    let result;
    if (aluno.textgrade >= 7){
        result = {name: aluno.name, finalResult:"Approved"};
        return result;
    } else {
        result = {name: aluno.name, finalResult:"Disapproved"};
        return result;
    }
}
const approvedOrNot = students.map(classResult)
console.log(approvedOrNot)