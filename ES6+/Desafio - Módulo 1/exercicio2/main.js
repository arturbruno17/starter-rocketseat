const usuarios = [
    { nome: 'Diego', idade: 23, empresa: 'Rocketseat' },
    { nome: 'Gabriel', idade: 15, empresa: 'Rocketseat' },
    { nome: 'Lucas', idade: 30, empresa: 'Facebook' },
];

// 2.1
const mapUsuarios = usuarios.map(item => item.idade)
console.log(mapUsuarios)


// 2.2
const filterUsuarios = usuarios.filter(item => {
    return item.empresa === 'Rocketseat' && item.idade > 18
}) 
console.log(filterUsuarios)


// 2.3
const findUsuarios = usuarios.find(item => item.empresa === 'Google')
console.log(findUsuarios)


// 2.4
const filterMapUsuarios = usuarios
    .map(item => ({ ...item, idade: item.idade * 2 }))
    .filter(item => item.idade <= 50)
console.log(filterMapUsuarios)