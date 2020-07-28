"use strict";

var usuario = {
  nome: 'Artur',
  idade: 15,
  endereco: {
    cidade: 'Barreira',
    estado: 'Ceará'
  }
};

function mostraNome(_ref) {
  var nome = _ref.nome,
      idade = _ref.idade;
  console.log(nome, idade);
}

mostraNome(usuario);
