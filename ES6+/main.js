const usuario = {
    nome: 'Artur',
    idade: 15,
    endereco: {
        cidade: 'Barreira',
        estado: 'Ceará'
    }
}

function mostraNome({ nome, idade }) {
    console.log(nome, idade)
}

mostraNome(usuario)