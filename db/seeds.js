require('./connection')

const Rabbit = require('../models/rabbit')
const User = require('../models/user')
const rabbitseeds = require('./seeds.json')

Rabbit.deleteMany({})
.then(()=> User.deleteMany({}))
.then(() => {
    return User.create({name: ""})
    .then( user => {
        return rabbitseeds.map(rabbit => ({...rabbit, owner: user._id}))
    })
})
.then((rabbits)=>{
    return Rabbit.insertMany(rabbits)
})
.then((rabbits)=>{
    console.log(rabbits)
})
.catch(console.error)
.finally(()=>{
    process.exit()
})




