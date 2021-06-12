'use strict';

const express = require('express');
const bodyParser  = require('body-parser');
const app = express();
  
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());


const port = 4000

app.get('/', (req, res) => {
    res.send('Hello World!')
  })

app.listen(port, ()=>{
    console.log(`Server runningt http://localhost:${port}`)
    
})

