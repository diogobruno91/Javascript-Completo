const notas = [7.7, 6.5, 5.2, 8.9, 3.6, 7.1, 9.0]

//Sem Callback
const notasBaixa1 = []
for (let i in notas) {
    if(notas[i] < 7) {
        notasBaixa1.push(notas[i])
    } 
}

console.log(notasBaixa1)

//Com callback
const notasBaixa2 = notas.filter(function(nota){
    return nota < 7
})

console.log(notasBaixa2)

const notasBaixa3 = notas.filter(nota => nota < 7)
console.log(notasBaixa3)