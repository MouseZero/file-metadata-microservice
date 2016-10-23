const express = require('express')
const path = require('path')

const app = new express()

app.use('/', express.static(path.join(__dirname, 'view')))

app.listen(3000)
