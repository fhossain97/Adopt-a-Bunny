const mongoose = require('mongoose')
const Schema = mongoose.Schema


const RabbitSchema = new Schema({
    name: String,
    description: String,
    img: String,
    status: String,
    age: Number
})

module.exports = mongoose.model('Rabbit', RabbitSchema)