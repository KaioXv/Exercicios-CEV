let nome = document.querySelector("#nome")
let idade = document.querySelector("#idade")
let carro = document.querySelector("#carro")
let resultado = document.querySelector("#resultado")


function gerar(){
    let pessoa = {
        nome: nome.value,
        idade: idade.value, 
        carro: carro.value,
    }

    resultado.innerHTML = ` <strong> Seu nome é ${pessoa.nome}, tem idade de ${pessoa.idade} anos, e possue um(a) ${pessoa.carro} como carro </strong>`


}