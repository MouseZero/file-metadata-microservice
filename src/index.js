const express = require('express')
const path = require('path')

const app = new express()

app.use('/', express.static(path.join(__dirname, 'view')))

const port = process.env.PORT || 3000
app.listen(port, function () {
  console.log('Server has started on port ' + port + '!!!')
})
