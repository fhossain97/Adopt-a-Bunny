require('./connection')

const Breed = require('../models/breed')
const User = require('../models/user')
const rabbitseeds = require('./seeds.json')

Breed.deleteMany({})
.then(()=> User.deleteMany({}))
.then(() => {
    return User.create({name: ""})
    .then( user => {
        return rabbitseeds.map(breed => ({...breed, owner: user._id}))
    })
})
.then((breeds)=>{
    return Breed.insertMany(breeds)
})
.then((breeds)=>{
    console.log(breeds)
})
.catch(console.error)
.finally(()=>{
    process.exit()
})



