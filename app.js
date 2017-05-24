var express = require('express')
var app = express()
var bodyParser = require('body-parser')
var api = require('./routes/api')

app.get('/', (req, res)=>{
  res.send('We use mongodb')
})

app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json())

app.use('/api', api)

app.listen(3000)
console.log(`You now try to undertand mongodb more!!`);
