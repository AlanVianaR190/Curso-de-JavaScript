function obterNome(){
    let nome = String(window.prompt("Qual o nome do funcionario?"));
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
    let salario = Number(window.prompt(`Qual o sálario de ${nome}`));
    while(true){
        if(isNaN(salario)){
            window.alert("Opção invalida");
            return obterSalario
        }
        else if(salario < 1320){
            window.alert("Salario digitado abaixo do valor minimo");
            return obterSalario;
        }
        return salario;
    }
}
function formatValor(v){
    return new Intl.NumberFormat("pt-br", {style: "currency", currency: "BRL", minimumFractionDigits: 2, maximumFractionDigits: 2}).format(v);
}
function respostas(nome, valor){
    let resp = window.document.querySelector("p#resposta");
    resp.innerHTML = `<h2>${nome} ira receber um aumento salarial!</h2>`;
    resp.innerHTML += `<p>O salario atual era de ${formatValor(valor)}</p>`;
}
function principal(){
    let nome = obterNome();
    let salario = obterSalario(nome);
    respostas(nome, salario);
}