const students = [
    {name: "Rodolfo", textgrade: 7},
    {name: "Maria", textgrade: 8},
    {name: "João", textgrade: 5},
    {name: "Bruno", textgrade: 9},
    {name: "Carla", textgrade: 3},
    {name: "Ana", textgrade: 2},
    {name: "Julio", textgrade: 10}
];
const approved = students.filter((aluno) => aluno.textgrade >= 7);
console.log(approved)
/* retornou
[
  { name: 'Rodolfo', textgrade: 7 },
  { name: 'Maria', textgrade: 8 },
  { name: 'Bruno', textgrade: 9 },
  { name: 'Julio', textgrade: 10 }
]
*/