var mongoose = require('mongoose')
var Schema = mongoose.Schema
var categorySchema = new Schema({
    id: {
        type: String,
        required: true,
        unique: true
    },
    name: {
        type: String,
        required: true
    },
    intro: {
        type: String
    }
})
var categoryModel = mongoose.model('category', categorySchema)

module.exports = categoryModel