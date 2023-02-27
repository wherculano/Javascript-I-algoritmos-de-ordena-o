function menorValor(arrayProdutos, posicaoInicial) {
  let maisBarato = posicaoInicial;
  for (let posicaoAtual = posicaoInicial; posicaoAtual < arrayProdutos.length; posicaoAtual++) {
    if (arrayProdutos[posicaoAtual].preco < arrayProdutos[maisBarato].preco) {
      maisBarato = posicaoAtual;
    }
  }
  return maisBarato;
}

module.exports = menorValor;

/*
Documentacao da funcao nativa sort():
https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Array/sort
*/
