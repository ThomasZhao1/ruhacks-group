const express = require('express')
const path = require('path')
const bodyParser = require('body-parser')
const app = express()

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))
app.use(express.static(path.join(__dirname, '/client/build')))

app.get('*', (req, res) => {
  console.log(`sending ${path.join(__dirname, '/client/build/index.html')}`)
  res.sendFile(path.join(__dirname, '/client/build/index.html'))
})

const port = process.env.PORT || 5000
app.listen(port, () => {
  console.log(`listening on port ${port}`)
})
