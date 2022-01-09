const express = require('express')

const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Indostatus express API')
})

app.get('/api/generos', (req, res) => {
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

app.get('/api/generos/:id', (req, res) => {
  const { id } = req.params
  res.json({
    id,
    nombre: 'masculino',
  })
})

app.get('/api/generos/deleted', (req, res) => {
  res.json({
    id,
    nombre: 'alan',
  })
})

app.listen(port, () => console.log('Server running on port', port))
