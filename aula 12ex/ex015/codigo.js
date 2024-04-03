function detectar(){

    //variavel com objeto Date() para pegar o ano atual, e variavel do id= ano de nascimento
    let date = new Date();
    let year = date.getFullYear();
    let born = window.document.querySelector("input#year");

    //variavel da id= da mensagem
    let msg = window.document.querySelector("div#msg");

    //tratamento de erro caso a data de nascimento seja 0 ou maior que o ano atual
    if (born.value.length == 0 || Number(born.value) > year){
        
        //mensagem de erro
        window.alert("[ERRO] Verifique os dados e tente novamente!")
    }
    else{
        
        //variavel do id= genero
        let gen = window.document.getElementsByName("gender");
        
        //calcular idade
        let age = year - Number(born.value)
        
        //variavel indicando que sera uma string
        let genero = " "

        /*metodo de criação de elemento no objeto definido, 
        setAttribute() é usado para definir ou modificar os atributos de um elemento HTML.*/
        let img = window.document.createElement("img");
        img.setAttribute("id", "foto");

        //condicionais para homem ou mulher
        if (gen[0].checked){
            genero = "Homem"
            document.body.style.background = "#726AEB"

            //atribuir a imagem de acordo com a idade
            if (age >= 0 && age < 4){
                img.setAttribute("src", "imagens/bebe_menino.jpg");
            }
            else if (age < 18){
                img.setAttribute("src","imagens/menino.jpg");
            }
            else if (age < 40){
                img.setAttribute("src", "imagens/um_jovem.jpg");
            }
            else if (age < 60){
                img.setAttribute("src", "imagens/h_meiaidade.jpg");
            }
            else{
                img.setAttribute("src", "imagens/idoso.jpg");
            }

        }
        else if (gen[1].checked){
            genero = "Mulher"
            document.body.style.background = "#EB6A93"

            if (age >= 0 && age < 4){
                img.setAttribute("src", "imagens/bebe_menina.jpg");
            }
            else if (age < 18){
                img.setAttribute("src", "imagens/menina.jpg");
            }
            else if (age < 40){
                img.setAttribute("src", "imagens/uma_jovem.jpg");
            }
            else if (age < 60){
                img.setAttribute("src", "imagens/m_meiaidade.jpg");
            }
            else{
                img.setAttribute("src", "imagens/idosa.jpg");
            }
            
        }
        
        //centralizando o objeto, alterando o texto, este metodo appendChild() é usado para adicionar um nó ao objeto
        msg.style.textAlign = "center"
        msg.innerHTML = `Detectamos ${genero} com ${age} anos`
        msg.appendChild(img)
    }

}