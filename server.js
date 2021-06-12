'use strict';

const express = require('express');
const bodyParser  = require('body-parser');
const app = express();
  
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());


const port = 3000

app.listen(port, (err)=>{
    if(err){
        console.log(err);
        process.exit(1);
        }

})

console.log(`Server running in: `+port);