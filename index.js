const express = require('express')
// Libreria para poder utilizar las variables de entorno (npm i dotenv)
require('dotenv').config()
const {dbConection} = require('./DB/config')  

// Configurar Cors
const cors = require('cors')

// Crear servidor de express
const app = express()

// Configuracion de cors (llamado)
app.use(cors())

// Base de datos
dbConection()

// Lectura y parceo del body
app.use(express.json())

// Directorio publico
app.use(express.static('public'))

// Rutas de la aplicacion para dar respuestas a la ruta ('/')
app.use('/api/events', require('./routes/events'))

// Escuchar peticiones en el puerto 4000
app.listen(process.env.PORT, () => {
    console.log(`Servidor corriendo en puerto ${process.env.PORT}`)
})