 var veiculos = JSON.parse(localStorage.getItem("veiculos")) || [];
 
 function pegarVeiculos() {
    let tamanhoArray = veiculos.length

    for (var i = 0; i < tamanhoArray; i++) {
    exibirVeiculos(veiculos[i])
    }
}

function exibirVeiculos(veiculo) {
    const paragrafo = document.createElement('p')
    document.body.appendChild(paragrafo)
    paragrafo.textContent = `Marca: ${veiculo.marca} Modelo: ${veiculo.modelo} Nome: ${veiculo.nome} Km: ${veiculo.km} Valor: ${veiculo.valor} Cor: ${veiculo.cor}`
}

console.log(veiculos)

pegarVeiculos()