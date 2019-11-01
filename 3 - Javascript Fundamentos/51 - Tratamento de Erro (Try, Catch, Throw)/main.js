// function tratarErro(erro) {
//     throw new Error('errou...')
// }

function imprimeNomeGritado(obj) {
    try {
        console.log(obj.name.toUpperCase() + "!!!")
    } catch(e) {
       console.log(`Deeu ruim ${e}`)
    }
    //  finally {
    //     console.log('finalizoooooou!!')
    // }
}

const obj = {nome: 'Roberto'}
imprimeNomeGritado(obj)