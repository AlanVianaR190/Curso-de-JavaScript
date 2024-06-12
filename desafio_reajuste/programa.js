function obterNome(){
    let nome = String(window.prompt("Qual o nome do funcionario?")).trim();
    while(!nome){
        window.alert("Digite um nome, o campo não pode permanecer vazio!")
        return obterNome();
    }
    return formatNome(nome);
}
function formatNome(nome){
    let nome1 = [];
    nomes_separados = nome.split(" ");
    for(nome of nomes_separados){
        nome = nome[0].toUpperCase() + nome.substring(1);
        nome1.push(nome);
    }
    nomes_juntos = nome1.join(" ");
    return nomes_juntos;
}
function obterSalario(nome){
    let salario = Number(window.prompt(`Qual o sálario de ${nome}?`));
    while(true){
        if(isNaN(salario)){
            window.alert("Opção invalida!");
            return obterSalario(nome);
        }
        else if(salario < 1320){
            window.alert("Salario digitado abaixo do valor minimo");
            return obterSalario(nome);
        }
        return salario;
    }
}
function obterPorcent(nome){
    let porcentagem = Number(window.prompt(`O sálario de ${nome} vai ser reajustado em qual porcentagem?`));
    while(isNaN(porcentagem) || porcentagem <= 0){
        window.alert("Opção invalida!");
        return obterPorcent(nome);
    }
    return porcentagem;
}
function porcentAument(valor, porcent){
    aumento = valor * (porcent/100);
    return aumento;
}
function totalSal(valor, aument){
    total = valor + aument;
    return formatValor(total);
}
function formatValor(v){
    return new Intl.NumberFormat("pt-br", {style: "currency", currency: "BRL", minimumFractionDigits: 2, maximumFractionDigits: 2}).format(v);
}
function formatPorcent(v){
    return new Intl.NumberFormat("pt-br", {minimumFractionDigits: 1, maximumFractionDigits: 1}).format(v);
}
function respostas(nome, valor, porcent, aument, total){
    let resp = window.document.querySelector("p#resposta");
    resp.innerHTML = `<h2>${nome} ira receber um aumento salarial!</h2>`;
    resp.innerHTML += `<p>O salario atual era de ${formatValor(valor)}.</p>`;
    resp.innerHTML += `<p>Com o aumento de ${formatPorcent(porcent)}%, o sálario vai aumentar ${formatValor(aument)} no proximo mês.</p>`
    resp.innerHTML += `<p>E a partir dai, ${nome} vai passar a ganhar ${total}.</p>`;
}
function principal(){
    let nome = obterNome();
    let salario = obterSalario(nome);
    let porcentagem = obterPorcent(nome);
    let aumento = porcentAument(salario, porcentagem);
    let total = totalSal(salario, aumento);
    respostas(nome, salario, porcentagem, aumento, total);
}