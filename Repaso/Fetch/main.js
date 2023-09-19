//funcion asincrona 
async function solicitar(){ //solicitará datos al exterior
    //await: se detengo. espera los datos completos
    const lista = await fetch("") //ruta 
    //datos vienen en json: anotaciones (no es javascript)
    const lista_definitiva = await lista.json() //debo modificar. Convierte los datos recibidos en una expresion nativa en javascript

    lista_definitiva.array.forEach(element => { //for each: recorro la lista y tengo acceso a cada elemento
        console.log(element)
    });
}