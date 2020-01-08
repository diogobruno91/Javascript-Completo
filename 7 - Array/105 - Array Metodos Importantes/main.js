const pilotos = ['Vettel', 'Alonso', 'Raikkonen', 'Massa']

// remove o ultimo!
pilotos.pop() 
//console.log(pilotos)

//Adicionado para a última posição!
pilotos.push('Verstappen') 
//console.log(pilotos)

// remove o primeiro!
pilotos.shift() 
//console.log(pilotos)

 // Adiciona para a primeira posição!
pilotos.unshift('Hamilton')
//console.log(pilotos)

// splice pode adicionar e remover elementos

//adicionar
pilotos.splice(2, 0, 'Bottas', 'Massa')
//console.log(pilotos)

//remover 
pilotos.splice(3, 1)
//console.log(pilotos)

const algunsPilotos = pilotos.slice(2) // novo array
console.log(algunsPilotos)

const algunsPilotos2 = pilotos.slice(1, 4) // pegando partes de um array
console.log(algunsPilotos2)