const express = require('express')
//ejecutamos express y nos retorna funcionalidades
const server = express()
//puerto por defecto x donde correra el server
server.set('port',3000)
//puesta en marcha del server. Debe escuchar un puerto
server.listen( server.get('port') )//3000
console.log ('Servidor corriendo en el puerto:', server.get('port'))

