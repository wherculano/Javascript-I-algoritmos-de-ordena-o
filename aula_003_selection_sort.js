const livros = require("./aula_002_lista_livros");
const menorValor = require("./aula_003_function_menor_valor");

for (let atual = 0; atual < livros.length-1; atual++) {
  let menor = menorValor(livros, atual);

  console.log("Posicao atual: ", atual);

  let livroAtual = livros[atual];
  console.log("livro atual: ", livroAtual);

  let livroMenorPreco = livros[menor];
  console.log("livro menor preco: ", livroMenorPreco);

  livros[atual] = livroMenorPreco;
  livros[menor] = livroAtual;
}

console.log(livros);
