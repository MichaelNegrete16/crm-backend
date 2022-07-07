const {response} = require('express')
const Evento = require('../models/Evento')

const getEventos = (req,res = response) => {
    res.json({
        ok:true,
        msg:'Todo Bien'
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

const actualizarEvento = (req,res=response) => {
    res.json({
        ok:true,
        msg:'Todo Bien'
    })
}

const eliminarEvento = (req,res=response) => {
    res.json({
        ok:true,
        msg:'Todo Bien'
    })
}

module.exports = {
    getEventos,
    crearEvento,
    actualizarEvento,
    eliminarEvento
}