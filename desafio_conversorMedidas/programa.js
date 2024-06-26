function distancia(){
    let metros = parseFloat(window.prompt("Digite uma distancia em metros (m): "));
    while(isNaN(metros)){
        window.alert("Opção invalida!");
        return distancia();
    }
    return metros;
}
function kiloMetros(m){
    km = m / 1000;
    return km;
}
function centiMetros(m){
    cm = m * 100;
    return cm;
}
function miliMetros(m){
    mm = m *1000;
    return mm;
}
/**
 * Função de formatação de distancias para o modelo pt-br padrão brasileiro.
 * @param{number} n - O numero que ira ser formatado.
 * @param{number} digi - A quantidade minima e maxima de casas decimais que ira mostrar, caso não seja especificado ira apresentar duas automaticamente.
 * @returns{string} - O numero formatado.
*/
function formatBrazil(n, digi = 2){
    const formatar = new Intl.NumberFormat("pt-BR", {style: "decimal", minimumFractionDigits: digi, maximumFractionDigits: digi,});
    return formatar.format(n);
}
function converter(){
    let metros = distancia();
    let km = kiloMetros(metros);
    let cm = centiMetros(metros);
    let mm = miliMetros(metros);
    let resposta = window.document.querySelector("p#resposta");
    //
    resposta.innerHTML = `<h2>A distancia de ${formatBrazil(metros)} metros, corresponde a... </h2>`;
    resposta.innerHTML += `<p>${formatBrazil(km, 3)} quilometros (Km)</p>`;
    resposta.innerHTML += `<p>${formatBrazil(cm, 0)} centimetros (Cm)</p>`;
    resposta.innerHTML += `<p>${formatBrazil(mm, 0)} milimetros (Mm)</p>`;
}