function bhaskara(a, b, c){
    const calc = (b ** 2) - (4 * (a * c));
    return calc
}
//
function numberCheck(text){
    while (true){
        const number = Number(window.prompt(text));
        if (!isNaN(number)){
            return number;
        }
        window.alert("Valor invalido, digite um numero inteiro!");
    }
}
//
function calcular(){
    //
    let numA = numberCheck("Qual o valor de a: ");
    let numB = numberCheck("Qual o valor de b: ");
    let numC = numberCheck("Qual o valor de c: ");
    //
    let resposta = window.document.querySelector("p#resposta");
    //
    let calculo = bhaskara(numA, numB, numC);
    resposta.innerHTML = `<h2>Resolvendo...</h2>`;
    resposta.innerHTML += `<p>A equação atual é <strong>${numB}<sup>2</sup> + ${numA}x + ${numC} = 0</strong></p>`;
    resposta.innerHTML += `<p>O calculo realizado será <strong>&Delta; = ${numB}<sup>2</sup> - 4 . ${numA} . ${numC}</strong></p>`;
    resposta.innerHTML += `<p>O valor calculado foi <strong><mark>&Delta; = ${calculo}</mark></strong></p>`;
}