const expre = require("express")
const moment = require("moment")

const app = expre()

const PORT = 8080

let contador = 0;

const server = app.listen(PORT, () => {

    console.log(`Servidor http escuchando en el puerto ${server.address().port}`)


})

server.on("Error", error => console.log(`Error en servidor ${error}`))


/* A) '/' en esta ruta raíz, el servidor enviará string con un elemento de título nivel 1 
(un h1 en formato HTML) que contenga el mensaje: 'Bienvenidos al servidor express' en color azul. */

app.get("/", (req, res) => {

    res.send("<h1><p style='color: blue;'>Bienvenidos al servidor express Nico-sensei</color></p> </h1>")

})

/* B) '/visitas' donde con cada request, el servidor devolverá un mensaje con la cantidad de visitas que se hayan realizado a este endpoint. 
Por ej. 'La cantidad de visitas es 10'
 */

app.get("/visitas", (req, res) => {

    contador++
    res.send("Contador:" + contador)

})

/* C) '/fyh' donde se devolverá la fecha y hora actual en formato objeto: 
{ fyh: '11/1/2021 11:36:04' } */

app.get("/fyh", (req, res) => {


    res.send(moment().format("DD/MM/YYYY HH:mm:ss"))

})



