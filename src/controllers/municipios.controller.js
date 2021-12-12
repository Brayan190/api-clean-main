'use strict'
const httpStatus = require('http-status')
const Municipios = require('../models/municipios.model')

exports.getMunicipios = async (req, res, next) => {
    const user = req.user;
    try {
  
      const municipios = await Municipios.find();
  
      res.status(httpStatus.CREATED)
      res.send({
        success: true,
        message: '',
        data: {
          municipios
        }
      })
    } catch (error) {
      return next(error)
    }
  }

  exports.getMunicipioById = async (req, res, next) => {
    const user = req.user;
    try {
      const body = req.body
      const municipio = await Municipios.findOne({ _id: body._id })
  
      res.status(httpStatus.CREATED)
      res.send({
        success: true,
        message: '',
        data: {
          municipio
        }
      })
    } catch (error) {
      return next(error)
    }
  }

exports.insertMunicipio = async (req, res, next) => {
  try {

    const body = req.body
    const municipio = new Municipios(body)
    const savedItem = await municipio.save()
    res.status(httpStatus.CREATED)
    res.send({
      success: true,
      message: 'Municipio insertado'
    })
  } catch (error) {
    return next(error)
  }
}

exports.updateMunicipio = async (req, res, next) => {
  try {

    const body = req.body
    let municipio = await Municipios.findOne({ _id: body._id })
    Object.assign(municipio, body)
    await municipio.save()
    res.status(httpStatus.CREATED)
    res.send({
      success: true,
      message: 'Municipio actualizado'
    })
  } catch (error) {
    return next(error)
  }
}




