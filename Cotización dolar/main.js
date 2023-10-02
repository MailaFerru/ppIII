async function obtener_datos()
{
    const datos = await fetch("https://dolarapi.com/v1/dolares")
    const usuarios = await datos.json()
    
    const filas = []
    usuarios.forEach( (element,index) => { 
    const fila =`
       <tr>
            <td>${element.casa}</td>
           <td>${element.nombre}</td>
           <td>${element.compra}</td>
           <td>${element.venta}</td>
           <td>${element.fechaActualizacion}</td>
       </tr>
    `
    filas.push(fila) 
    
    });
    
    document.getElementById("tb1_body").innerHTML = filas.join('')
    
}
//se ejecuta la funcion
obtener_datos()