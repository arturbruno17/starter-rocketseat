"use strict";

// Const: apenas leitura, mas mutável
// const usuario = {nome : 'Artur'}
// usuario.nome = 'Diego'
// console.log(usuario)
function teste(x) {
  var y = 2;

  if (x > 5) {
    var _y = 4;
    console.log(x, _y);
  }
} // console.log(y) ERROR


teste(10);
