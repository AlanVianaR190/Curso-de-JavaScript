let data = new Date()
let hora = data.getHours()

console.log(`Agora são ${hora} horas`)

if (hora > 6 && hora < 12){
    console.log("Tenha um bom dia!")
}
else if (hora > 12 && hora < 18){
    console.log("Tenha uma boa tarde!")
}
else {
    console.log("Tenha uma boa noite!")
}
