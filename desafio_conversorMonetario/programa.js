// função para obter o valor da cotação do dolar
function obterValor_dolar(){
    let valor = Number(window.prompt("Antes de mais nada. Quanto esta a cotação (valor) do dólar agora?"));
    while(isNaN(valor) || valor == 0){
        window.alert("Opção invalida");
        return obterValor_dolar();
    }
    return valor;
}
// função para obter o valor do usuario
function obterValor_usuario(){
    let valor = Number(window.prompt("Quantos R$ voce tem na carteira? "));
    while(isNaN(valor) || valor == 0){
        window.alert("Opção invalida");
        return obterValor_usuario();
    }
    return valor;
}
// função para converter o valor de R$ para US$
function converter(valorBR, valorUS){
    convercao = valorBR / valorUS;
    return convercao
}
//funções para formatar valores para R$ e US$
function formatBrasil(n){
    return new Intl.NumberFormat("pt-BR", {style: "currency", currency: "BRL", maximumFractionDigits: 2, minimumFractionDigits: 2}).format(n);
}
function formatUSA(n){
    return new Intl.NumberFormat("en-US", {style: "currency", currency: "USD", maximumFractionDigits: 2, minimumFractionDigits: 2}).format(n);
}
// função da pagina
function primeiro(){
    let dolar = obterValor_dolar();
    // armazena o valor da variavel em um objeto global
    window.dolar = dolar;
}
// função do botão
function segundo(){
    let carteira = obterValor_usuario();
    let convercao = converter(carteira, window.dolar);
    let resposta = window.document.querySelector("p#resposta");
    resposta.innerHTML = `Com ${formatBrasil(carteira)} e o dolar valendo ${formatUSA(window.dolar)} ...`;
    resposta.innerHTML += `<p>Voce tem ${formatUSA(convercao)}</p>`
}