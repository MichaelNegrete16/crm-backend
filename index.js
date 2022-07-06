const express = require('express')
// Libreria para poder utilizar las variables de entorno (npm i dotenv)
require('dotenv').config()

// Crear servidor de express
const app = express()

// Directorio publico
app.use(express.static('public'))

// Rutas de la aplicacion para dar respuestas a la ruta ('/')
// app.get('/', (req,res) => {
//     console.log('Se requiere el /')
//     res.json({
//         ok:true
//     })
// })

// Escuchar peticiones en el puerto 4000
app.listen(process.env.PORT, () => {
    console.log(`Servidor corriendo en puerto ${process.env.PORT}`)
})