function multiplicar(){

    //
    let num = window.document.querySelector("input#txtnum");
    let result = window.document.querySelector("select#tabuada");

    //condição para tratar de erro 
    if (num.value.lenght == 0){

        //disparar alerta 
        window.alert("Não e possivel realizar a operação")
    }
    else{

        //converter para tipo int
        n = Number(num.value);
        result.innerHTML = "Resultados...<br>"

        //laço repetição
        let i = 0
        while(i <= 20){
            
            //criando um novo elemento 
            let item = window.document.createElement("option")
            
            //conteudo do elemento
            item.text = `${i} x ${n} = ${i * n}`
            
            //definindo um valor para esta opção caso queira recuperar o valor
            item.value = `tab${n}`
            
            //adicionando uma opção
            result.appendChild(item)
            
            //contador
            i += 1
        }
    
    }

}