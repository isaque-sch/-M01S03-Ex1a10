const marcas= []

function cadastrarMarca() {
    const inputMarca = document.getElementsByName('marca')[0]
    var marcas = JSON.parse(localStorage.getItem('marcas')) || []
    
    marcas.push(inputMarca.value)
    console.log('Marca cadastrada com sucesso')
    console.log(marcas)
    localStorage.setItem("marca", JSON.stringify(marcas));
}