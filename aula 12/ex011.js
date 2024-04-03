let idade = 18

console.log(`A sua idade é ${idade} anos.`);

if (idade < 16){
    console.log("Você não pode votar!")
}

else if (idade < 18 || idade > 65){
    console.log("Seu voto e opcional!")
}

else{
    console.log("Seu voto é obrigatorio!")
}