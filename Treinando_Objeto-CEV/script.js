let resultado = document.querySelector("#resultado");
let titulo = document.querySelector("#titulo");

titulo.style.color = "white"



function gerar() {
    // Obtendo os valores dos inputs dentro da função
    let nome = document.querySelector("#nome").value;
    let idade = document.querySelector("#idade").value;
    let carro = document.querySelector("#carro").value;

    // Convertendo a idade de string para número
    idade = Number(idade);

    // Criando variavel para trazer valores da data atual
    let ano = new Date();

    // Criando o objeto pessoa
    let pessoa = {
        nome: nome,
        // Pegando ano atual e diminuindo com o ano da idade da pessoa
        idade: ano.getFullYear() - idade,
        carro: carro
    };

    // Exibindo o resultado no elemento HTML
    resultado.innerHTML = `<strong>Seu nome é ${pessoa.nome}, tem idade de ${pessoa.idade} anos, e possui um(a) ${pessoa.carro} como carro</strong>`;
    
    // Opcional: Exibindo o tipo de 'idade' no console para verificar a conversão
    console.log(typeof pessoa.idade);
}

