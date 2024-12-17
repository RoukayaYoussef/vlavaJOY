const express = require('express');
const app = express();
var cors = require('cors');
const excelToJson = require('convert-excel-to-json');
const fs = require('fs');

app.use(cors())

app.get('/services', function (req, res) {
    
  
  const result = excelToJson({
    source: fs.readFileSync('./data.xlsx') // fs.readFileSync return a Buffer
});
res.send( result)
})

app.listen(3000) 