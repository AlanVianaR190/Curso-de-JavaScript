//
function obterNome(){
    // o  metodo trim() retira os espaços vazios no começo e no fim
    let nome = String(window.prompt("Qual seu nome? ")).trim();
    if (!nome){
        window.alert("Digite um nome, o campo não pode estar vazio!");
        // caso o campo nome esteja vazio retorna a função novamente
        return obterNome();
    }
    return formatNome(nome);
}
function formatNome(nome){
    nome_divid = nome.split(" ");
    let nome1 = [];
    for (let nome of nome_divid){
        nome = nome[0].toUpperCase() + nome.substring(1);
        nome1.push(nome);
    }
    nome_junt = nome1.join(" ");
    return nome_junt;
}
function obterIdade(nome){
    let idade = Number(window.prompt(`Olá ${nome}, Quantos anos vc tem? `));
    while(isNaN(idade) || idade < 0){
        window.alert("Opção invalida, digite um numero inteiro valido para idade!");
        idade = Number(window.prompt(`Olá ${nome}, Quantos anos vc tem? `));
    }
    return idade;
}
function desafio(){
    let nome = obterNome();
    let idade = obterIdade(nome);
    window.alert(`Acabei de conhecer ${nome}, que tem ${idade} anos de idade!`);
}