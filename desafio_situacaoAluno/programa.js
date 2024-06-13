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
    let nomes_separados = nome.split(" ");
    for(let nome of nomes_separados){
        nome = nome[0].toUpperCase() + nome.substring(1);
        nome1.push(nome);
    }
    let nomes_juntos = nome1.join(" ");
    return nomes_juntos;
}
function obterNota(nome_ativ ,nome_aluno){
    let nota = Number(window.prompt(`Digite a nota ${nome_ativ} de ${nome_aluno}: `));
    while(isNaN(nota) || nota < 0 || nota > 10){
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
    return (somar(notas) / 4) * 0.4;
}
function notaN2(nome_aluno){
    let nota = obterNota("N2", nome_aluno);
    return nota * 0.6;
}
function notaFinal(nota_n1, nota_n2){
    let nota = nota_n1 + nota_n2;
    return nota;
}
/*function somarArray(array) {
    return array.reduce((acumulador, valorAtual) => acumulador + valorAtual, 0);
}*/
function somar(array){
    let soma = 0;
    for(let nota of array){
        soma += nota;
    }
    return soma;
}
function formatValor(v){
    return new Intl.NumberFormat("pt-br", {minimumFractionDigits: 1, maximumFractionDigits: 1}).format(v);
}
function respostas(nome, notas_n1, nota_n2, nota_fin){
    let resposta = window.document.querySelector("p#resposta");
    resposta.innerHTML = `<h2>Analisando a situação de ${nome}...</h2>`;
    resposta.innerHTML += `<p>Com as notas ${formatValor(notas_n1)} & ${formatValor(nota_n2)} a <b>média é ${formatValor(nota_fin)}</b></p>`;
    respFinal(nota_fin);
}
function respFinal(nota_fin){
    let resposta = window.document.querySelector("div#resposta2");
    if (nota_fin < 3.0){
        resposta.innerHTML = "<p>Com média abaixo de 3,0 o aluno esta <mark class= 'vrmelho'><b>REPROVADO!</b></mark></p>";
    }
    else if (nota_fin >= 3.0 && nota_fin < 6.0){
        resposta.innerHTML = "<p>Com média entre 3,0 e 6,0 o aluno esta em <mark class= 'amarelo'><b>RECUPERAÇÃO!</b></mark></p>";
    }
    else{
        resposta.innerHTML = "<p>Com média acima de 6,0 o aluno esta <mark class= 'vrde'><b>APROVADO!</b></mark></p>";
    }
}
function iniciar(){
    let nome = obterNome();
    let notas_n1 = notasN1(nome);
    let nota_n2 = notaN2(nome);
    let nota_final = notaFinal(notas_n1, nota_n2);
    respostas(nome, notas_n1, nota_n2, nota_final);
}