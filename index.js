const express = require('express')

// Crear servidor de express
const app = express()

// Rutas de la aplicacion para dar respuestas a la ruta ('/')
app.get('/', (req,res) => {
    console.log('Se requiere el /')
    res.json({
        ok:true
    })
})

// Escuchar peticiones en el puerto 4000
app.listen(4000, () => {
    console.log(`Servidor corriendo en puerto ${4000}`)
})