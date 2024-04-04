function contar(){
    
    //
    let begin = window.document.querySelector("input#txtbeg");   
    let end = window.document.querySelector("input#txtend");
    let jump = window.document.querySelector("input#txtpas");

    //
    let msg = window.document.querySelector("div#msg");

    //condição tratamento de erro
    if (begin.value.lenght == 0 || end.value.lenght == 0 || jump.value.length == 0){
        
        //
        msg.innerHTML = "Impossivel contar"
    }
    else{

        //convertendo as variaveis para  tipo num
        comeco = Number(begin.value);
        fim = Number(end.value);
        pulo = Number(jump.value);

        //
        msg.innerHTML = "Contando...<br>"

        //condição para o vaor do pulo não selecionado
        if (pulo <= 0){
            
            //alerta
            window.alert("Passo invalido! Considerando passo '1'")
            pulo = 1
        }

        //
        if (comeco < fim){
            for (let i = comeco; i <= fim; i += pulo){
                msg.innerHTML += `${i} - `
            }
        }
        
        //condição caso a contagem seja de tras pra frente
        else{
            for (let i = comeco; i >= fim; i -= pulo){
                msg.innerHTML += `${i} - `
            }
        }

        //
        msg.innerHTML += "Fim!"
    }

}