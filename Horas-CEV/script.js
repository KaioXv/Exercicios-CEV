function carregar(){
let mensagem = document.querySelector("#msg");
let imagem = document.querySelector("#imagem");
let data = new Date();
let hora = data.getHours();



if(hora >= 0 && hora < 12){
    mensagem.innerHTML = `<h1> São ${hora} horas, portanto está de MANHÃ!!! </h1>`;
    imagem.src = 'manha.jpg';
    document.body.style.background = '#ffffbf';
}else if(hora >= 12 && hora < 18){
    mensagem.innerHTML = `<h1> São ${hora} horas, portanto está de TARDE!!! </h1>`;
    imagem.src = 'tarde.jpg';
    document.body.style.background = '#ffa227';
}else{
    mensagem.innerHTML = `<h1> São ${hora} horas, portanto está de NOITE!!! </h1>`;
    imagem.src = 'noite.jpg';
    document.body.style.background = '#1b1b1b';
}
}




