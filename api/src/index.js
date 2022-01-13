const express = require('express')
const routerApi = require('./router-api')
const app = express()
const port = 3000

app.use(express.json())

app.get('/', (req, res) => {
  res.send('Indostatus express API')
})

routerApi(app)

app.listen(port, () => console.log('Server running on port', port))
