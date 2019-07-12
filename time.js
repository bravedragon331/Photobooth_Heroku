var express = require('express');
var app = express();

app.get('/time', function (req, res) {  
  res.status(200).send({time: new Date()})
})

const port = process.env.PORT || 80
app.listen(port, () => 
  console.log(`Server is listening on port ${port}.`)
)