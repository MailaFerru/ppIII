async function obtener_usuarios()
{
    const datos = await fetch("https://jsonplaceholder.typicode.com/users") //arreglo
    const usuarios = await datos.json() //traduce a javascript
    
    const filas = []
    usuarios.forEach( (element,index) => { //funcion flecha: debe tener una sola línea
       // console.log(element.email)
    const fila =`
       <tr>
            <td>${index + 1}</td>
           <td>${element.username}</td>
           <td>${element.email}</td>
       </tr>
    `
    filas.push(fila) 
    
    //insertar fila a filas
    });
    //el contenido de la entrega es HTML
    document.getElementById("tb1_body").innerHTML = filas.join('') //filas join elimina caracteres extraños que no pertenecen a html
    //funcion flecha
    //const probar = d1 => console.log('mi funcion flecha')
}
//se ejecuta la funcion
obtener_usuarios()