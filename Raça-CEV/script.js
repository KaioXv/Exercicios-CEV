function verificar(){
    let data = new Date()
    let ano =data.getFullYear()
    let fano = document.querySelector("#txtano")
    let res = document.querySelector("div#res")
    if(fano.value.length == 0 || fano.value > ano){
        alert("[ERROR] Os dados inseridos estão incorretos!!!")
    }else{
        let fsex = document.getElementsByName("radsex")
        let idade = ano - Number(fano.value)
        let raça = ''
        let imagem = document.createElement('img')
        imagem.setAttribute('id', 'imagem')
        if(fsex[0].checked){
            raça = 'Autobot'
            if(idade >= 0 && idade < 21){
                imagem.setAttribute('src', 'autNOVO.jpg')
            }else if(idade >= 21 && idade < 60) {
                imagem.setAttribute('src', 'autJovem.jpg')
                
            }else{
                imagem.setAttribute('src', 'autVelho.jpg')
            }
            document.body.style.background = '#f5002d'
            
            
        }else if (fsex[1].checked){
            raça = 'Decepticon'
            if(idade >= 0 && idade < 21){
                imagem.setAttribute('src', 'decNovo.png')
            }else if(idade >= 21 && idade < 60) {
                imagem.setAttribute('src', 'decJovem.jpg')
                
            }else{
                imagem.setAttribute('src', 'decVelho.jpg')
            }

            document.body.style.background = '#893dd0'


            

        }
        res.innerHTML = `Detectamos <strong> ${raça} </strong> com idade <strong>${idade}</strong>`
          
        res.appendChild(imagem)
        imagem.style.marginTop = '20px'
        
    }
    

    }
