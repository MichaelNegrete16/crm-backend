const {Router} = require('express')
const {check} = require('express-validator')
const {validarCampos} = require('../middleware/validar-campos')
// Controllers
const {getEventos, crearEvento, actualizarEvento, eliminarEvento} = require('../controllers/events')


const router = Router()

// Obtener eventos
router.get('/',getEventos)

// Crear evento
router.post('/', [
    check('nombre','El nombre es obligatorio').not().isEmpty(),
    check('apellido','El apellido es obligatorio').not().isEmpty(),
    check('email','El correo es obligatorio o ya existe').isEmail(),
    validarCampos
] ,crearEvento)

// Actualizar evento
router.put('/:id',[
    check('nombre','El nombre es obligatorio').not().isEmpty(),
    check('apellido','El apellido es obligatorio').not().isEmpty(),
    check('email','El correo es obligatorio o ya existe').isEmail(),
    validarCampos
] ,actualizarEvento)

// Eliminar evento
router.delete('/:id',eliminarEvento)

module.exports = router