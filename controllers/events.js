const {response} = require('express')
const Evento = require('../models/Evento')

const getEventos = async (req,res = response) => {

    const eventos = await Evento.find()

    res.json({
        ok:true,
        msg:eventos
    })
}

const crearEvento = async (req,res=response) => {
    
    // Extraer los datos mandados
    const evento = new Evento(req.body)
    
    try {
        const eventoGuardado = await evento.save()

        res.status(200).json({
            ok:true,
            msg: eventoGuardado
        })

    } catch (error) {
        console.log(error)
        res.status(500).json({
            ok:false,
            msg: 'Ha ocurrido un error!'
        })
    }
}

const actualizarEvento = async (req,res=response) => {

    // Extraer id de la url
    const eventoId = req.params.id
    
    try {
        // Consultar que el id sea valido
        const evento = await Evento.findById(eventoId)
        if(!evento){
            return res.status(404).json({
                ok:false,
                msg:'El usuario no existe por ese ID'
            })
        }

        // El nuevo evento
        const nuevoEvento = {
            ...req.body
        }

        // Actualziar el evento
        const eventoActualizado = await Evento.findByIdAndUpdate(eventoId, nuevoEvento, {new: true})

        // Respuesta si todo pasa
        res.json({
            ok:true,
            evento: eventoActualizado
        })

    } catch (error) {
        console.log(error)
        res.status(500).json({
            ok:false,
            msg: "Ha ocurrido un error!"
        })
    }


    
}

const eliminarEvento = async (req,res=response) => {
    const eventoId = req.params.id

    try {
        
         // Consultar que el id sea valido
         const evento = await Evento.findById(eventoId)
         if(!evento){
             return res.status(404).json({
                 ok:false,
                 msg:'El usuario no existe por ese ID'
             })
         }

         await Evento.findByIdAndDelete(eventoId)

         res.json({
            ok:true,
            msg:'Usuario eliminado con exito!'
         })

    } catch (error) {
        console.log(error)
        res.status(500).json({
            ok:false,
            msg:'Ha ocurrido un error inesperado, hable con un administrador'
        })

    }
}

module.exports = {
    getEventos,
    crearEvento,
    actualizarEvento,
    eliminarEvento
}