//Dos funciones
function recolectar() {
    const tipo_operacion = document.getElementById("op").value //tipo de operación seleccionado
  
    
    const d1 = document.getElementById("d1") //nombre del dato1
    const d2 = document.getElementById("d2") //nombre del dato2
    
    if (tipo_operacion == 0) { // si es 0, corriente. Calcula entre tension y resistencia
        d1.textContent = 'Tensión'
        d2.textContent = 'Resistencia'
    }
    if (tipo_operacion == 1) { //si es 1, tension. Calcula entre corriente y resistencia
        d1.textContent = 'Corriente'
        d2.textContent = 'Resistencia'
    }
    if (tipo_operacion == 2) { // si es 2, resistencia. Calcula entre tensión y corriente
        d1.textContent = 'Tensión'
        d2.textContent = 'Corriente'
    }
    //const respuesta = calcular(dato1,dato2,tipo_operacion)
    document.getElementById("h_resultado").textContent = ''
}


function calcular() {
    const tipo_operacion = document.getElementById("op").value //tipo de operación seleccionado
    const dato1 = document.getElementById("inp_d1").value //dato1
    const dato2 = document.getElementById("inp_d2").value //dato2

    let resultado = null

    if (tipo_operacion == 0) { //corriente
        resultado = dato1 / dato2
    }
    if (tipo_operacion == 1) { //tensión 
        resultado = dato1 * dato2
    }
    if (tipo_operacion == 2) { //Resistencia
        resultado = dato1 / dato2
    }

    document.getElementById("h_resultado").textContent = 'Resultado: '+resultado
}