const { json } = require('express');
const express = require('express')
require('dotenv').config()
const app = express()

app.set('view engine', 'ejs');

app.use(express.urlencoded({extended:false}));
app.use(express(json));



app.use('/', require('./routes/routes'))

app.listen(process.env.PORT, () => {
    console.log(`server on port ${process.env.PORT}`)
})