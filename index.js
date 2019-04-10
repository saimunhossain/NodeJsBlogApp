const expressEdge = require('express-edge')
const express = require('express')
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
const fileUpload = require('express-fileupload')

const createPostController = require('./controllers/createPost')
const homePageController = require('./controllers/homePage')
const storePostController = require('./controllers/storePost')
const getPostController = require('./controllers/getPost')

const app = new express()

mongoose.connect('mongodb://localhost:27017/NodeBlog',)

app.use(fileUpload())
app.use(express.static('public'))
app.use(expressEdge)
app.set('views',`${__dirname}/views`)

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

const validateCreatePostMiddleware = (req, res, next) => {
    if(!req.files.image || !req.body.username || !req.body.title || !req.body.subtitle || !req.body.content){
        return res.redirect('/posts/new')
    }
    next()
}

app.use('/posts/store', validateCreatePostMiddleware)

app.get('/', homePageController)
app.get('/post/:id', getPostController)
app.get('/posts/new', createPostController)
app.post('/posts/store', storePostController)


app.listen(3000, () => {
    console.log('App Listening 3000')
})