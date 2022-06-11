require('./connection')

const Bunny = require('../models/bunny')
const User = require('../models/user')
const rabbitseeds = require('./seeds.json')

Bunny.deleteMany({})
.then(()=> User.deleteMany({}))
.then(() => {
    return User.create({name: "Farhana"})
    .then( user => {
        return rabbitseeds.map(rabbit => ({...rabbit, owner: user._id}))
    })
})
.then(()=>{
    return Bunny.insertMany(rabbitseeds)
})
.then((bunnies)=>{
    console.log(bunnies)
})
.catch(console.error)
.finally(()=>{
    process.exit()
})




