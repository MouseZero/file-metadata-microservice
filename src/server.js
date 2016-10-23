const Express = require('express')
const path = require('path')
const multer = require('multer')
const upload = multer({ dest: 'upload/' })

const app = new Express()

// Main Page
app.use('/', Express.static(path.join(__dirname, 'view')))

// Upload page
app.post('/', upload.single('avatar'), function (req, res, next) {
  res.json({size: req.file.size})
})

const port = process.env.PORT || 3000
app.listen(port, function () {
  console.log('Server has started on port ' + port + '!!!')
})

