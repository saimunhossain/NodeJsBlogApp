const path = require('path')
const expressEdge = require('express-edge')
const express = require('express')
const mongoose = require('mongoose')

const app = new express()

mongoose.connect('mongodb://localhost:27017/NodeBlog',)

app.use(express.static('public'))
app.use(expressEdge)
app.set('views',`${__dirname}/views`)

app.get('/',(req, res) => {
    res.render('index')
})
app.get('/about',(req, res) => {
    res.render('about')
})
app.get('/post',(req, res) => {
    res.render('post')
})
app.get('/contact',(req, res) => {
    res.render('contact')
})

app.listen(3000, () => {
    console.log('App Listening 3000')
})