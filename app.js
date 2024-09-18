const express = require('express')
const path = require('path')
require('./config/database')
const post = require('./src/routes/post')
const methodOverride = require('method-override')


const app = express()
app.use(express.json())
app.use(express.urlencoded({extended: true}))
app.use(methodOverride('_method', { methods: ['POST', 'GET']}))

app.use(express.static(path.join(__dirname, 'public')))

app.use((req, res, next) => {
    if (req.url === '/favicon.ico') {
        res.status(204).end();
    } else {
        next();
    }
});

app.set('views', path.join(__dirname, 'src/views'))
app.set('view engine', 'ejs')



app.use('/', post)

app.listen(3000, () => {
    console.log('Servidor ativo')
})