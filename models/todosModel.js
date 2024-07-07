const mongoose = require('mongoose')

const schemaModel = new mongoose.Schema({
    userId: String,
    title: String,
    createDate: {
        type: Date,
        default: Date.now
    },
    finishDate: String,
    comp: {
        type: Boolean,
        default: false
    }
})

module.exports = mongoose.model('todos', schemaModel)