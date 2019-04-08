const mongoose = require('mongoose')

const Post = require('./database/models/Post')


mongoose.connect('mongodb://localhost:27017/NodeBlog',{ useNewUrlParser: true } )

Post.find({}, (error, posts) => {
    console.log(error, posts)
})

// Post .create({
//     title: 'My third blog post',
//     description: 'Blog third post description',
//     content: 'Lorem ipsum content is here third'
// }, (error, post) => {
//     console.log(error, post)
// })