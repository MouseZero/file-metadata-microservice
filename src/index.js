const express = require('express')

const app = new express()

app.get('/', function (req, res, next) {
  res.send('express is working')
})

app.listen(3000)

