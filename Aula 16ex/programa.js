//array vazio
let listaNum = []

let lista = window.document.querySelector("select#lista")

let num = window.document.querySelector("input#numero")

let msgm = window.document.querySelector("p#resultado")

//esta função verifica se um numero se encotra dentro do intervalo
function isNum(n){

    if (Number(n) >= 1 && Number(n) <= 100){
        
        return true
    }
    else{
        
        return false
    }
}

//esta função verifica se um numero esta na lista/array/vetor
function isList(n, lista){

    if (lista.indexOf(Number(n)) != -1){

        return true
    }
    else{

        return false
    }
}

//esta função adiciona um valor
function addNum(){

    //condição caso as funções sejam verdadeiras
    if (isNum(num.value) && !isList(num.value, listaNum)){

        //metodo que adiciona um elemento ao array/vetor
        listaNum.push(Number(num.value))

        //criação do item na barra de opção
        let item = window.document.createElement("option")

        //vizualização do item na barra de opção
        item.text = `Valor ${num.value} adicionado`

        //adicionar um numero na barra de opção
        lista.appendChild(item)

        //limpar numero da barra de seleção
        msgm.innerHTML = " "

    }
    else{

        window.alert("Numero invalido ou já encontrado na lista!")
    }

    //limpa o campo de entrada
    num.value = " "
    
    //coloca o foco de volta no campo de entrada
    num.focus()

}

//
function verificar(){

    if (listaNum.length == 0){

        window.alert("Adicione valores antes de finalizar")

    }
    else{

        //
        let total = listaNum.length

        //maior/menor sera o primeiro do vetor automaticamente
        let maior = listaNum[0]
        let menor = listaNum[0]

        //
        let soma = 0

        //laço for/each varredura
        for (let pos in listaNum){

            //condições para pegar o maior e o menor
            if (listaNum[pos] > maior){
                
                maior = listaNum[pos]
            }
            if (listaNum[pos] < menor){
                
                menor = listaNum[pos]
            }

            //acumulador
            soma += listaNum[pos]

        }

        //
        let media = soma / total

        //
        msgm.innerHTML += `<p>Ao todo temos, ${total} numeros cadastrados</p>`
        msgm.innerHTML += `<p>O maior valor informado foi ${maior}</p>`
        msgm.innerHTML += `<p>O menor valor informado foi ${menor}</p>`
        msgm.innerHTML += `<p>Somando todos os valores, temos ${soma}</p>`
        msgm.innerHTML += `<p>A media dos valores digitados é ${media}</p>`

    }
    
}


