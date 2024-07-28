const mongoose = require('mongoose')

const postSchema = mongoose.Schema({
    title: {type: String, required: true},
    date: new Date().format('DD/MM/YYYY'),
    content: {type: String, required: true}
})

module.exports = mongoose.model('Post', postSchema)