'use strict'

const express = require('express')
const router = express.Router()
const municipios = require('../../controllers/municipios.controller')
const validator = require('express-validation')
const auth = require('../../middlewares/authorization')

router.get('/', municipios.getMunicipios)
router.get('/getById', municipios.getMunicipioById)
router.post('/insert', municipios.insertMunicipio)
router.put('/update', municipios.updateMunicipio)

module.exports = router