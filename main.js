//Dos funciones
function recolectar()
{
    const dato1 = document.getElementById("inp_d1").value 
    const dato2 = document.getElementById("inp_d2").value 
    const dato3 = document.getElementById("inp_d3").value 
    const tipo_operacion = document.getElementById("op").value

    const respuesta = calcular(dato1,dato2,dato3,tipo_operacion)
    document.getElementById("h_resultado").textContent = 'Resultado: '+respuesta
}
function calcular (dato1,dato2,dato3,tipo_operacion)
{
    let resultado = null

    if(tipo_operacion == 0){
        resultado = dato1 / dato2
    }
    if(tipo_operacion == 1){
        resultado = dato1 / dato2
    }

    if(tipo_operacion == 2){
       resultado = dato1 * dato2
    }
        
    return resultado 
}