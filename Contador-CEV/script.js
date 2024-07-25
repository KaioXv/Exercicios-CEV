function contar(){
    let inicio = document.querySelector('#txti');
    let fim = document.querySelector("#txtf");
    let passo = document.querySelector("#txtp");
    let res = document.querySelector("#res");


    if (inicio.value.length == 0 || fim.value.length == 0 || passo.value.length == 0) {
        res.innerHTML = "<strong> Algo está errado!!! Confira os dados </strong>";
    }else{
        res.innerHTML = "<strong> CONTANDO: </strong> <br>";
        let i  = Number(inicio.value);
        let f = Number(fim.value);
        let p = Number(passo.value);

        if (p <= 0 ){
            res.innerHTML = "<strong> O VALOR DO PASSO PRECISAR SER MAIOR QUE 0:    </strong> <br> ";
            p = 1;
        }

        if(i < f){
            //Contagem crescente
            for(let c = i; c <= f; c+= p){
                res.innerHTML += ` ${c} \u{1F449}`;
            }
            

        }else{
            //Contagem decrescente
            for( c = i; c >= f; c-= p){
                res.innerHTML+= `${c} \u{1F449}`;
            }
            
        }
        res.innerHTML += `\u{1F3C1}`

        
    }
}