function obterTemp(){
    let temp = Number(window.prompt("Digite uma temperatura em ºC (Celsius): "));
    while(isNaN(temp)){
        window.alert("Opção invalida!");
        return obterTemp();
    }
    return temp;
}
function convertKel(val){
    tk = val + 273.15;
    return tk;
}
function convertFah(val){
    tf = (val * 9/5) + 32;
    return tf;
}
function format_temp(n, q=1){
    return new Intl.NumberFormat("pt-br", {minimumFractionDigits: q, maximumFractionDigits: q}).format(n);
}
function respostas(c, k, f){
    let resp = window.document.querySelector("p#resposta");
    resp.innerHTML = `<h2>A temperatura de ${format_temp(c, 1)}ºC; corresponde a...</h2>`;
    resp.innerHTML += `<p>${format_temp(k, 2)}ºK (Kelvin)</p>`;
    resp.innerHTML += `<p>${format_temp(f, 2)}ºF (Fahrenheit)</p>`;
}
//
function principal(){
    let temperatura = obterTemp();
    let tempK = convertKel(temperatura);
    let tempF = convertFah(temperatura);
    let resposta = respostas(temperatura, tempK, tempF);
}