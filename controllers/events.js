const {response} = require('express')

const getEventos = (req,res = response) => {
    res.json({
        ok:true,
        msg:'Todo Bien'
    })
}

const crearEvento = (req,res=response) => {
    res.json({
        ok:true,
        msg:'Todo Bien'
    })
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