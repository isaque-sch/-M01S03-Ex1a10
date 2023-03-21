
var modelos = []

class Modelo {
    marca;
    modelo;

    constructor (marca, modelo) {
        this.marca = marca;
        this.modelo = modelo;
    }
}

//criarOpcao()

function cadastrarModelo() {

    const inputMarca = document.getElementsByName('marca')[0]
    const inputModelo = document.getElementsByName('modelo')[0]

    modelos.push(new Modelo(inputMarca.value, inputModelo.value))
    console.log('modelo cadastrado com sucesso')
    console.log(modelos)
}

function criarOpcao() {
    const selecionarMarca = cadastro.querySelector('#modelo')
    const marcas = JSON.parse(localStorage.getItem('marcas'))

    marcas.map((marca) => {
        const opcao = document.createElement('opcao')
        opcao.textContent = marca 
        opcao.value = marca
        brandSelector.appendChild(option);
    })
}