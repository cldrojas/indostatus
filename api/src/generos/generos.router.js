const express = require('express')
const GenerosService = require('./generos.service')

const router = express.Router()
const service = new GenerosService()

router.get('/', async (req, res) => {
  const generos = await service.find()
  res.status(200).json(generos)
})

router.get('/:id', async (req, res) => {
  const { id } = req.params
  const genero = await service.findOne(parseInt(id), 10)
  res.status(200).json(genero)
})

router.get('/deleted', async (req, res) => {
  const generos = await service.find()
  const generosDeleted = generos.filter((genero) => genero.deleted === true)
  res.status(200).json(generosDeleted)
})

router.post('/', async (req, res) => {
  const { name } = req.body
  const genero = await service.create({ name })
  res.status(201).json(genero)
})
module.exports = router
