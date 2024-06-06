function obterProd(){
    let nome = window.prompt("Qual o produto que vc esta comprando?").trim().toUpperCase();
    while (nome == 0){
        window.alert("Por favor digite o nome do produto!");
        return obterProd();
    }
    return nome;
}
function obterPrec(prod){
    let valor = Number(window.prompt(`Qual o preço de ${prod}?`));
    while (isNaN(valor) || valor == 0){
        window.alert("Valor invalido!");
        return obterPrec();
    }
    return valor;
}
function desconto(v){
    valor = v * (10/100);
    return valor;
}
function valorFinal(v){
    valor = v - desconto(v);
    return valor;
}
function formatValor(v){
    return new Intl.NumberFormat("pt-br", {style: "currency", currency: "BRL", minimumFractionDigits: 2, maximumFractionDigits: 2}).format(v)
}
function respostas(prod, valor, desc, total){
    let resposta = window.document.querySelector("p#resposta");
    resposta.innerHTML = `<h2>Calculando desconto de 10% para... ${prod}.</h2>`;
    resposta.innerHTML += `<p>O preço original era de ${formatValor(valor)}</p>`;
    resposta.innerHTML += `<p>Vc acaba de ganhar ${formatValor(desc)} de desconto (-10).</p>`;
    resposta.innerHTML += `<p>No fim vc ira pagar ${formatValor(total)} no produto ${prod}.</p>`
}
//
function iniciar(){
    let nomeProd = obterProd();
    let valoProd = obterPrec(nomeProd);
    let descVal = desconto(valoProd);
    let valFim = valorFinal(valoProd);
    respostas(nomeProd, valoProd, descVal, valFim);
}