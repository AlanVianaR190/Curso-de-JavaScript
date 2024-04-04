//função
function parImpar(n){

    if (n % 2 == 0){
        return`PAR!`
    }
    else{
        return`IMPAR!`
    }
}

//função com parametro opcional
function soma(n1 = 0, n2 = n1){
    return n1 + n2
}

//função recursiva
function fatorial(n){

    if (n == 1){
        return 1
    }
    else{
        return n * fatorial(n-1)
    }
}


//utilizando função
let numero = parImpar(4)
console.log(numero)

//variavel com função
let double = function(n){
    return n * 2
}
console.log(double(24))

//utilizando a função com parametros opcionais
console.log(soma(7))
console.log(soma(7, 3))

//urilizando a função recursiva
console.log(fatorial(5))

