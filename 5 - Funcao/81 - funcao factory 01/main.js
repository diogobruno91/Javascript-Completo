const prod1 = {
    nome: 'Diogo',
    preco: 45
}

const prod2 = {
    nome: 'Bruno',
    preco: 1234
}

//Factory Simples 
function criarPessoa() {
    return {
        nome: 'Ana',
        sobrenome: 'Silva'
    }
}

console.log(criarPessoa())