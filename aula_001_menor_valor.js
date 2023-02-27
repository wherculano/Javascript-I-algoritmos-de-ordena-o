const precosLivros = [25, 15, 30, 50, 45, 20]

let menorPreco = 0

for (let atual = 0; atual < precosLivros.length; atual++){
    if(precosLivros[atual] < precosLivros[menorPreco]){
        menorPreco = atual
    }
}
console.log(`O livro mais barato custa R$ ${precosLivros[menorPreco]}`)