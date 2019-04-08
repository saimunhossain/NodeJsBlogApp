const mongoose = require('mongoose')

const Post = require('./database/models/Post')


mongoose.connect('mongodb://localhost:27017/NodeBlog',{ useNewUrlParser: true } )

Post.find({}, (error, posts) => {
    console.log(error, posts)
})

// Post.findById("5cab0b68fd19a11944d375e1", (error, post) => {
//     console.log(error, post)
// })

// Post.findByIdAndUpdate('5cab0b68fd19a11944d375e1', {
//     title: 'My first blog post has been updated'
// },(error, post) => {
//     console.log(error, post)
// })

// Post.findByIdAndRemove('5cab158d989cf53724816fb9', (error)=> {
//     console.log(error)
// })

// Post .create({
//     title: 'My third blog post',
//     description: 'Blog third post description',
//     content: 'Lorem ipsum content is here third'
// }, (error, post) => {
//     console.log(error, post)
// })