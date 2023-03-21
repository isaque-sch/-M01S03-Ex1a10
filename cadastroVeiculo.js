const veiculos = []

class Modelo {
    marca;
    modelo;
    nome;
    km;
    valor;
    cor;

    constructor (marca, modelo, nome, km, valor, cor) {
        this.marca = marca;
        this.modelo = modelo;
        this.nome = nome;
        this.km = km;
        this.valor = valor;
        this.cor = cor;
    }
}

function cadastrarVeiculo() {

    const inputMarca = document.getElementsByName('marca')[0]
    const inputModelo = document.getElementsByName('modelo')[0]
    const inputNome = document.getElementsByName('nome')[0]
    const inputKm = document.getElementsByName('km')[0]
    const inputValor = document.getElementsByName('valor')[0]
    const inputCor = document.getElementsByName('cor')[0]

    veiculos.push(new Modelo(inputMarca.value, inputModelo.value, inputNome.value, inputKm.value, inputValor.value, inputCor.value))
    console.log('Veículo cadastrado com sucesso')
    console.log(veiculos)

    localStorage.setItem("veiculos", JSON.stringify(veiculos));
}
