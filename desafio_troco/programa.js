function obterProd(){
    let nome = String(window.prompt("Que produto vc está comprando?")).trim();
    while(!nome){
        window.alert("Por favor digite o nome do produto!");
        return obterProd();
    }
    return nome.toUpperCase();
}
function obterPreco(nome){
    let preco = Number(window.prompt(`Quanto custa esse(a) ${nome} que vc esta comprando?`));
    while(isNaN(preco) || preco < 0){
        window.alert("Por favor digite o valor correto do produto!");
        return obterPreco(nome);
    }
    return preco;
}
function obterValorPag(nome, preco){
    let pagamnt = Number(window.prompt(`Qual foi o valor q vc deu para pagar esse(a) ${nome}`));
    while(isNaN(pagamnt) || pagamnt < preco){
        window.alert("Por favor digite o valor pago pelo produto corretamente!");
        return obterValorPag(nome, preco);
    }
    return pagamnt;
}
function formatValor(v){
    return new Intl.NumberFormat("pt-br", {style: "currency", currency: "BRL", minimumFractionDigits: 2, maximumFractionDigits: 2}).format(v);
}
function obterTroco(pagamnt, preco){
    let troco = pagamnt - preco;
    return formatValor(troco);
}
function resposta(nome, preco, pagamnt){
    window.alert(`Vc comprou um(a) ${nome} que custou ${formatValor(preco)}.\nDeu ${formatValor(pagamnt)} em dinheiro e vai receber ${obterTroco(pagamnt, preco)} de troco.\nVolte sempre!`);
}
function iniciar(){
    let produto = obterProd();
    let valor = obterPreco(produto);
    let pagamento = obterValorPag(produto, valor);
    resposta(produto, valor, pagamento);
}