const livros = require("./aula_002_lista_livros");
const menorValor = require("./aula_003_function_menor_valor");

function insertionSort(lista){
    for(let atual=0; atual < lista.length; atual++){
        let analise = atual
        while(analise > 0 && lista[analise].preco < lista[analise - 1].preco){
            itemAnalise = lista[analise]
            itemAnterior = lista[analise - 1]

            lista[analise] = itemAnterior
            lista[analise - 1] = itemAnalise

            analise--
        }
    }
    console.log(lista)
}

insertionSort(livros)
