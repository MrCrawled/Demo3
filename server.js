'use strict';

const express = require('express');
const bodyParser  = require('body-parser');
const app = express();
  
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

console.log("No funca nada")