function recolectar(){
    document.getElementById("h_resultado").textContent = '' //vaciar resultado precio de lista
    document.getElementById("h_resul").textContent = '' //vaciar resultado precio c/ descuento
}
function calcular(){ //precio de lista
    const seleccion = document.getElementById("op").value
     if (seleccion == 0) { //ford ka
        result = 2900000
    }else{
        if (seleccion == 1) { //ford fiesta
            result = 3350000
        }else{ //ford focus
            result = 3960000
        }
    }
document.getElementById("h_resultado").textContent = 'El precio de lista es: $'+result
}
function descuento() { //precio con descuento 

    calcular()

    const seleccion = document.getElementById("op").value

    let resultado = null;

    if (seleccion == 0) { //ford ka
        resultado = 2900000 - ( 2900000 * 0.15 )
    }else{
        if (seleccion == 1) { //ford fiesta
            resultado = 3350000 - ( 3350000 * 0.05 )
        }else{ //ford focus
            resultado = 3960000 - ( 3960000 * 0.10 )
        }
    }
   
    document.getElementById("h_resul").textContent = 'Con descuento: $'+resultado

}

   
    
