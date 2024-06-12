function obterNome(){
    let nome = String(window.prompt("Qual é o nome do aluno?")).trim();
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
function obterNota(nome_ativ ,nome_aluno){
    let nota = Number(window.prompt(`Digite a nota ${nome_ativ} de ${nome_aluno}: `));
    while(isNaN(nota)){
        window.alert("Opção Invalida!");
        return obterNota(nome_ativ ,nome_aluno);
    }
    return nota;
}
function notasN1(nome_aluno){
    let nomes_prova = ["a1", "a2", "a3", "a4"];
    let notas = [];
    for(let nome of nomes_prova){
        let nota = obterNota(nome, nome_aluno);
        notas.push(nota);
    }
    return notas;
}
//
function somarArray(array) {
    return array.reduce((acumulador, valorAtual) => acumulador + valorAtual, 0);
}
//nota final da n1

function respostas(nome, notas_n1){
    let resposta = window.document.querySelector("p#resposta");
    resposta.innerHTML = `<h2>Analisando a situação de ${nome}...</h2>`;
    resposta.innerHTML += `<p>${notas_n1}</p>`;
}
function iniciar(){
    let nome = obterNome();
    let notas_n1 = notasN1(nome);
    respostas(nome, notas_n1);
}