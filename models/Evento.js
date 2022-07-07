const {Schema,model} = require('mongoose')

const EventoSchema = Schema({

    nombre:{
        type: String,
        require: true
    },
    apellido:{
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
    }

})

// Cambiar el nombre de _id a id y quitar el _v    (NO NECESARIO)
EventoSchema.method('toJSON', function(){
    const {__v , id , ...object} = this.toObject()
    object.id = _id
    return object
})

module.exports = model('Evento', EventoSchema)
