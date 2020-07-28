// Const: apenas leitura, mas mutável
// const usuario = {nome : 'Artur'}

// usuario.nome = 'Diego'

// console.log(usuario)

function teste(x) {
    let y = 2

    if(x > 5) {
        let y = 4

        console.log(x, y)
    }
}

// console.log(y) ERROR

teste(10)