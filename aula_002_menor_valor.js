const livros = require("./aula_002_lista_livros")

let menorPreco = 0

for (let atual = 0; atual < livros.length; atual++){
    if(livros[atual].preco < livros[menorPreco].preco){
        menorPreco = atual
    }
}
console.log(`O livro mais barato é o ${livros[menorPreco].titulo} e ele custa R$ ${livros[menorPreco].preco}`)