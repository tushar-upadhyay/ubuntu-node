var express = require('express')
var app = express()
app.get('/',(req,res)=>{
  res.send('server is up!!1')
})
app.listen(3000,'20.39.51.132')
