require('dotenv').config()
var express = require('express');
var ejsLayouts = require('express-ejs-layouts');
var multer = require('multer')
var cloudinary = require('cloudinary')

var app = express();
var upload = multer({dest: './uploads/'})


app.set('view engine', 'ejs');
app.use(ejsLayouts);

app.get('/', function(req, res) {
  res.render('index');
});

// app.post('/', upload.single('myFile'), (req, res) => {
//   res.send(req.file)
// })

app.post('/', upload.single('myFile'), (req, res) => {
  cloudinary.uploader.upload(req.file.path, (result) => {
    res.send(result)
  })
})

app.listen(3000);
