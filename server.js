const express = require('express')
const app =express()
const PORT = 4000
const path = require('path')
const morgan = require('morgan')
const session = require('express-session')
const passport = require('passport')
const methodOverride = require('method-override')
const Rabbit = require('./models/rabbit')
const rabbitRoute = require('./routes/rabbitRoutes')

require('dotenv').config()
require('./db/connection')

require('./config/database');
require('./config/passport')

app.use(express.json())
app.use(express.static('public'))
app.use(express.urlencoded({extended: true}))
app.use(morgan('dev'))
app.use(passport.initialize());
app.use(passport.session())
app.use(methodOverride('_method'))
app.use('/rabbits', rabbitRoute)
app.use(session({
    secret: 'Bunnies!',
    resave: false,
    saveUninitialized: true
  }))
  

app.set("view engine", "ejs")
app.set('views', path.join(__dirname,'views'))

app.listen(PORT, () => {
    console.log(`✅ PORT: ${PORT} 🌟`) 
})




