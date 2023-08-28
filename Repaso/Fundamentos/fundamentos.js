function mostrar () {
alert('probando mi función') //popup, ventana emergente
}

//FUNDAMENTOS

//VARIABLES (let y var)
//se declara variable y se asigna valor
var edad = 10
var edad = 20 //var es permisiva. Redeclara una variable
console.log('edad: ',edad) //imprime 20. Pisa el dato anterior

//let es complicada. No permite sobreescribir una variable. Toma un valor y ya
let edades = 15 //se declara una unica vez la variable
edades = 20 //se pisa la edad anterior (15)
console.log('edades: ', edades) //imprime por consola 

//ejemplos
var antiguedad = 10
if (antiguedad > 5){
    var antiguedad = 20
    console.log('antiguedad:', antiguedad)
}
console.log('antiguedad: ', antiguedad)

let numero = 10
if (numero > 5){ 
    let numero = 20 //si quiero utilizar el valor de arriba no uso let. Let adentro de la funcion crea una variable nueva!
    console.log('numero: ', numero)
}
console.log('numero: ', numero)

//constantes
const dni = 41420622 //Este es el num de la constante
//dni = 42709184 //No es varable, es constante. Tiene un solo valor
console.log('dni: ', dni) //error de sintaxis

const age = 22 //mismo comportamiento que let
if (age > 21) {
    const age = 30
    console.log ('age: ', age) //imprime el valor de la funcion
}
console.log ('age: ', age) //imprime el valor que está por fuera de la funcion

const Miarreglo = [10,20,30] //constante 
Miarreglo.push(40)//se le agrega elementos al arreglo
console.log(Miarreglo)