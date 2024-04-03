
//função
function carregar(){

    //variaveis declaradas com o querySelector, entre parenteses esta a tag#nome_do_id
    let msg = window.document.querySelector("div#mensagem");
    let img = window.document.querySelector("img#imagem"); 

    //a variavel hora tem a hora atual do objeto Date()
    let tempo = new Date();
    let hora = tempo.getHours();

    //metodo do objeto mensagem para alterar a mensagem
    msg.innerHTML = `Agora são ${hora} horas`

    //bom dia
    if (hora >= 6 && hora < 12 ){

        //alterar a imagem de acordo com o horario
        img.src= "imagens/fotomanha.jpg"

        //alterar a cor de fundo
        document.body.style.background = "#f4a378"
    }

    //boa tarde
    else if (hora >= 12 && hora < 18){
        img.src= "imagens/fototarde.jpg"
        document.body.style.background = "#6ab2c0"
    }

    //boa noite
    else{
        img.src= "imagens/fotonoite.jpg"
        document.body.style.background = "#00494f"
    }

}



