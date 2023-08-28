//crear dos funciones. 1) recolecta info 2) hace calculos
function recolectar() // () parametros 
{
    //almaceno en const porque no tengo intenciones de modificarlo
    const dato1 = document.getElementById("inp_d1").value //solo numero
    const dato2 = document.getElementById("inp_d2").value //value se usa con input
    const tipo_operacion = document.getElementById("slt_operacion").value

    //funcion que invoca a otra, coloco su nombre. Recolecta los datos
    const respuesta = calcular(dato1,dato2,tipo_operacion)

    //imprimir por consola el resultado
    //console.log (respuesta)
    document.getElementById("h_resultado").textContent = 'Resultado: '+respuesta//text<Contenttexto concateno
}

//recibirá parametros

function calcular(dato1,dato2,tipo_operacion) 
{
    let resultado = null //almacena operaciones.


    if(tipo_operacion == 0){
        //alert('sumamos') muestra x pantalla una alerta
        resultado = (Number);dato1 + (Number);dato2
    }
    if(tipo_operacion == 1){
        //alert('restamos')
        resultado = dato1 - dato2
    }

    if(tipo_operacion == 2){
       // alert('multiplicamos')
       resultado = dato1 * dato2
    }
    if(tipo_operacion == 3){
        //alert('dividimos')
        resultado = dato1 / dato2
    }
    // respuesta que entrega la funcion calcular
    return resultado //llamo a la funcion "let resultado"

}
