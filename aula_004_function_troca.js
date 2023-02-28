function troca(lista, analise){
    itemAnalise = lista[analise]
    itemAnterior = lista[analise - 1]

    lista[analise] = itemAnterior
    lista[analise - 1] = itemAnalise
}

module.exports = troca