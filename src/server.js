const Express = require('express')
const path = require('path')

const app = new Express()

app.use('/', Express.static(path.join(__dirname, 'view')))

app.post('/', function (req, res, next){
  res.send('recieved post')
})

const port = process.env.PORT || 3000
app.listen(port, function () {
  console.log('Server has started on port ' + port + '!!!')
})

