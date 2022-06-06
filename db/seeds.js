require('./connection')

const Rabbit = require('../models/rabbit')
const User = require('../models/user')
const rabbitseeds = require('./seeds.json')

Rabbit.deleteMany({})
.then(()=> User.deleteMany({}))






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



.then(() => {
    // then returns updates bookmarks with a owner: user._id
    // first creates user, then maps over bookmarks and adds that id in 
    return User.create({name: "billie", birthDay: '1-6'})
    .then( user => {
        return bookmarkseeds.map(bookmark => ({...bookmark, owner: user._id}))
    })
})
.then((bookmarks)=>{
    // return newly Inserted bookmarks into the db
    return Bookmark.insertMany(bookmarks)
})
.then((bookmarks)=>{
    console.log(bookmarks)
})
.catch(console.error)
.finally(()=>{
    process.exit()
})