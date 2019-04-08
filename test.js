const mongoose = require('mongoose')

const Post = require('./database/models/Post')


mongoose.connect('mongodb://localhost:27017/NodeBlog',{ useNewUrlParser: true } )

Post .create({
    title: 'My first blog post',
    description: 'Blog post description',
    content: 'Lorem ipsum content is here'
}, (error, post) => {
    console.log(error, post)
})