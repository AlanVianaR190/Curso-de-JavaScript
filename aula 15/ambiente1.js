let nums = [6, 5, 8, 3, 4, 9]

//metodo de posção do elemento
let pos1 = nums.indexOf(5)

if (pos1 == -1){
    console.log("Este elemento não se encontra no vetor!")
}
else{
    console.log(`Este elemento se encontra na posição ${pos1}`)
}
console.log()

//metodo de ordenar os itens do vetor
console.log("Nosso vetor em ordem e:")
nums1 = nums.sort()
console.log(nums1)
console.log()