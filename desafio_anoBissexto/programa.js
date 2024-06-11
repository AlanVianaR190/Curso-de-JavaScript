function obterAno(){
    let ano = Number(window.prompt("Qual é o ano que vc quer verificar?"));
    while(true){
        if(isNaN(ano)){
            window.alert("Opção invalida!");
            return obterAno();
        }
        else if(ano <= 0){
            window.alert("Informe o ano para prosseguir!");
            return obterAno();
        }
        return ano;
    }
}
function anoBis(ano){
    if (ano % 4 == 0 && ano % 100 != 0 || ano % 400 == 0){
        // ano é bissexto
        return true;
    }
    else{
        // ano não é bissexto
        return false;
    }
}
function resposta(ano, isBis){
    let resposta = window.document.querySelector("p#resposta");
    if (isBis){
        resposta.innerHTML += `<P>O ano de ${ano} <mark class="sim" >É BISSEXTO!</mark> &#9989 </P>`;
    }
    else{
        resposta.innerHTML += `<P>O ano de ${ano} <mark class="nao" >NÃO É BISSEXTO!</mark> &#10060 </P>`;
    }
}
function verificar(){
    let ano = obterAno();
    let verificar_ano = anoBis(ano);
    resposta(ano, verificar_ano);
}