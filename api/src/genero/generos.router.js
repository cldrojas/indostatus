import express from 'express'

const router = express.Router()

router.get('/', (req, res) => {
  res.json([
    {
      id: 1,
      nombre: 'femenino',
    },
    {
      id: 2,
      nombre: 'masculino',
    },
  ])
})

router.get('/deleted', (req, res) => {
  res.json({
    id,
    nombre: 'alan',
  })
})

router.get('/:id', (req, res) => {
  const { id } = req.params
  res.json({
    id,
    nombre: 'masculino',
  })
})

module.exports = router
