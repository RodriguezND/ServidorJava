const http = require("http")
const moment = require("moment")

const server = http.createServer((peticion, respuesta) => {
    
    const hora= moment().format('HH');
    let horaNumber = Number(hora)

   horaNumber = 20
   console.log(horaNumber)

    if(6 < horaNumber && 12 > horaNumber)
    {

        respuesta.end("Buenos dias Aquiles")


    } 
    else if( 13 < horaNumber && 19 > horaNumber)
    {
        respuesta.end("Buenos tardes Aquiles")
    } 
    else{

        respuesta.end("Buenos noches Aquiles!")

    }

    });

const connectedServer = server.listen(8080, () => { 
    
    console.log(`Servidor HTTP escuchando en el puerto ${connectedServer.address().port}`) });

