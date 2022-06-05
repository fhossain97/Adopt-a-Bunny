require('./connection')

const Rabbit = require('../models/rabbit')
const rabbitseeds = require('./seeds.json')

Rabbit.deleteMany({})
.then(() => {
    return Rabbit.insertMany(rabbitseeds)
})
.then((rabbits) => {
    console.log(rabbits)
})
.catch(console.error)
.finally(() => {
    process.exit()
})