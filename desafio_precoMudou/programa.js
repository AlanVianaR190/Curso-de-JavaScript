function prizeBef(){
    let valor = Number(window.prompt("Qual era o preço anterior do produto? "));
    while(isNaN(valor)){
        window.alert("Opção invalida!");
        return prizeBef();
    }
    return valor;
}
function prizeCurr(){
    let valor = Number(window.prompt("Qual e o preço atual do produto? "));
    while(isNaN(valor)){
        window.alert("Opção invalida!");
        return prizeCurr();
    }
    return valor;
}
function formatValor(v){
    return new Intl.NumberFormat("pt-br", {style: "currency", currency: "BRL", minimumFractionDigits: 2, maximumFractionDigits: 2}).format(v);
}
function formatPorc(v){
    return new Intl.NumberFormat("pt-br", {minimumFractionDigits: 1, maximumFractionDigits: 1}).format(v);
}
function conta(valAnt, valAtu){
    if(valAnt > valAtu){
        resultado = valAnt - valAtu;
        return resultado;
    }
    else{
        resultado = valAtu - valAnt;
        return resultado;
    }
}
function variacao(valAnt, valAtu){ 
    if(valAnt > valAtu){
        resultado = ((valAnt - valAtu) / valAnt) * 100;
        return resultado;
    }
    else{
        resultado = ((valAtu - valAnt) / valAnt) * 100;
        return resultado;
    }
}
function answerS(valAnt, valAtu){
    let resp = window.document.querySelector("p#resposta");
    resp.innerHTML = `<h2>Analisando os valores informados...</h2>`;
    resp.innerHTML += `<p>O produto custava ${formatValor(valAnt)} e agora custa ${formatValor(valAtu)}.</p>`;
    result = conta(valAnt, valAtu);
    varia = variacao(valAnt, valAtu);
    if (valAnt < valAtu){
        resp.innerHTML += "<p>Hoje o produto esta mais caro!</p>";
        resp.innerHTML += `<p>O preço subiu ${formatValor(result)} em relação ao preço anterior.</p>`;
        resp.innerHTML += `<p>Uma variação de ${formatPorc(varia)}% pra cima.</p>`;
    }
    else{
        resp.innerHTML += "<p>Hoje o produto esta mais barato!</p>";
        resp.innerHTML += `<p>O preço caiu ${formatValor(result)} em relação ao preço anterior.</p>`;
        resp.innerHTML += `<p>Uma variação de ${formatPorc(varia)}% pra baixo.</p>`;
    }
}
function principal(){
    let precoAnt = prizeBef();
    let precoAtu = prizeCurr();
    answerS(precoAnt, precoAtu);
}