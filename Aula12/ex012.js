var agora = new Date()
var hora = agora.getHours()

console.log(`Agora são extamente ${hora} horas.`)
if (hora <12){
    console.log('Bom dia"')

}else if (hora <18) {
    console.log('Bom tarde')
}else {
    console.log('Bom noite')
}