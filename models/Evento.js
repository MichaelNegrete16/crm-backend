const {Schema,model} = require('mongoose')

const EventoSchema = Schema({

    name:{
        type: String,
        require: true
    },
    lastName:{
        type: String,
        require: true
    },
    email:{
        type: String,
        require: true,
        unique:true
    },
    direccion:{
        type: String
    },
    telefono: {
        type: Number,
        require: true
    },
    tarea: {
        type: String
    }

})

// Cambiar el nombre de _id a id y quitar el _v    (NO NECESARIO)
// EventoSchema.method('toJSON', function(){
//     const {__v , id , ...object} = this.toObject()
//     object.id = _id
//     return object
// })

module.exports = model('Evento', EventoSchema)
