// ----- external modules -----
require('dotenv').config();
const express = require('express');
const path =require('path');


const app = express();
app.get('/globe', (req,res) => {
  res.status(200).send('Hello');
});
// ----- Middleware -----
app.use(express.json())
app.use(express.static(path.join(__dirname, "/client/dist")));

app.listen(process.env.PORT, (err) => {
  if (err) {
    console.log('can\'t connect to port...:', err);
  } else {
    console.log(`connected to localhost:${process.env.PORT}...`);
  }
})