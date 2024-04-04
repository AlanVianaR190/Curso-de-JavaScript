//vetor
let nums = [6, 5, 8, 3, 4, 9]

//impressão do vetor
console.log(nums)
console.log(`Nosso vetor tem: ${nums}`)
console.log()

//atributo para ver o tamanho do vetor
console.log(`O tamanho do vetor e de ${nums.length} elementos`)
console.log()

//metodo de adicionar um elemento
nums.push(2)
console.log(nums)
console.log()

//adicionando um elemento sem o metodo .push
nums[7] = 10
console.log(nums)
console.log()

//elementos dos vetores
console.log(`O primeiro elemento do vetor e o: ${nums[0]}`)
console.log(`O elemento adicionado pelo metodo .push e o: ${nums[6]}`)
console.log()

//laço for para varrer a variavel
for (pos = 0;pos < nums.length; pos += 1){
    console.log(nums[pos])
}
console.log()

//for each (for/in)
for (let pos in nums){
    console.log(nums[pos])
}
console.log()


