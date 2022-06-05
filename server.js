const express = require('express')
const app =express()
const PORT = 4000
const path = require('path')
const morgan = require('morgan')
const methodOverride = require('method-override')
const Rabbit = require('./models/rabbit')
const rabbitRoute = require('./routes/rabbitRoutes')

require('./db/connection')

app.use(express.json())
app.use(express.static('public'))
app.use(express.urlencoded({extended: true}))
app.use(morgan('dev'))
app.use(methodOverride('_method'))
app.use('/rabbits', rabbitRoute)

app.set("view engine", "ejs")
app.set('views', path.join(__dirname,'views'))

app.listen(PORT, () => {
    console.log(`✅ PORT: ${PORT} 🌟`) 
})




