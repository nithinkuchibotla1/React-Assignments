
const express = require('express')
const fs = require('fs');
const app = express()
var cors = require('cors')
const port = 3000
app.use(cors())

app.get('/', (req, res) => {
  res.send('Hello World!')
})
app.get('/data',(req,res)=>{
const data=require('./data.json');
res.send(data);
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})