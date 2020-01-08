const alunos = [
    { nome: 'João', nota: 7.9 },
    { nome: 'Maria', nota: 9.2 }
]

//Imperativo
let total1 = 0
for (let i = 0; i < alunos.length; i++) {
    total1 += alunos[i].nota
}
console.log(total1 / alunos.length)

// Declarativo 
const getNova = aluno => aluno.nota
const soma = (total, atual) => total + atual
const total2 = alunos.map(getNova).reduce(soma)
console.log(total2 / alunos.length) 