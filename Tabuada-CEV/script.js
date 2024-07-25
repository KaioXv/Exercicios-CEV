function calcular(){
    let num = document.querySelector("#txtn");
    let tab = document.querySelector("#seltab");

    if(num.value.length == 0){
        alert("Por favor, DIGITE UM NUMERO !!!")
        
    }else{
        n = Number(num.value)
        let c = 1
        tab.innerHTML = '' //usado para limpar select antes de multiplicar outros numeros
        while(c <= 10){
            let item = document.createElement('option') // usado para criar um elemento filho no select do arquivo html
            item.text = `${n} x ${c} = ${n*c}`
            tab.appendChild(item) //anexou o item como um elemeento de select
            c++   
        }
        
    }

    
}