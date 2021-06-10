require('dotenv').config()
const express = require('express')
const path = require('path')
const hbs = require('hbs')
const app = express()
const port = process.env.PORT || 3000

// use static page
app.use(express.static(path.join(__dirname,'../public')))
// use template engine default
app.set('view engine', 'hbs')
// change views engine directory
app.set('views', path.join(__dirname, './templates/views'))
// use hbs partial file
hbs.registerPartials(path.join(__dirname, './templates/partials'))

app.use(express.json())
app.use(express.urlencoded({extended:false}))

app.use(require('./router/router'))

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})