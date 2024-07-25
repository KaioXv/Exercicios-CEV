//Utilizando variaveis para trazer elementos do html e manipulalos atraves do seu id

let num = document.querySelector("#numb");
let lista = document.querySelector("#seltab");
let res = document.querySelector("#res");
let valores = [];


// Função para saber se é ou não um numero na lista
function isNumero(n){
    if(Number(n) >= 1 && Number(n) <= 100){
        return true;
    }else{
        return false;
    }
}

//Função para saber se o valor ja está presente na lista
function inlista(n, l){
    if(l.indexOf(Number(n))  != -1){
        return true
    }else{
        return false
    }
}

//Função para adicionar numero postado no input na lista
function adicionar (){
    if(isNumero(num.value) && !inlista(num.value, valores)){
        
    
        valores.push(Number(num.value));
        let item = document.createElement('option');
        item.text = `Valor ${num.value} adicionado.`;
        lista.appendChild(item);
        res.innerHTML='';

    }else{
        alert("Valor invalido, ou ja encontrado na lista!!!")
    }

    //Comandos para limpar o input e retornar o foco para o mesmo
    num.value = ''
    num.focus();
}


// Função que pega o tamanho do array e através de codigo pegamos quantos valores a lista possue, maior numero, menor numero, a soma e a media dos mesmos 
function finalizar(){
    if(valores.length == 0){
        alert('Adicione valores antes de finalizar!!!')
    }else{
        let tot = valores.length;
        let maior = valores[0];
        let menor = valores[0];
        let soma = 0
        let media = 0
        for(let pos in valores){
            soma += valores[pos];
            
            if(valores[pos] > maior)
                maior = valores[pos];
            if(valores[pos] < menor)
                menor = valores[pos];
        }
        media = soma / tot;
        res.innerHTML="";
        res.innerHTML +=`<p> A lista possue ${tot} valores!!! </p>`
        res.innerHTML +=`<p> O maior numero é encontrado na lista é: ${maior}</p>`
        res.innerHTML +=`<p> O menor numero é encontrado na lista é: ${menor}</p>`
        res.innerHTML +=`<p> A soma dos numeros presentes na lista é: ${soma}</p>`
        res.innerHTML +=`<p> A media dos numeros presentes na lista é: ${media.toFixed(2)}</p>`
    }
}