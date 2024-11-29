require('dotenv').config()


const express = require('express')

const app = express()

app.get('/',(req,res) => {
    res.send('hello world')
})

app.get('/home',(req,res) => {
    res.send('hello world home page')
})

app.get('/about',(req,res) => {
    res.send('<h1> about section </h1>')
})

app.listen(process.env.PORT, () =>{
    console.log("your website  ")
})