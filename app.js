const express = require('espress')
const path = require('path')
require('./config/database')

const post = require('./src/routes/post')
const rootRouter = require('./src/routes/index')

const app = express()
app.use(express.json())

app.set('views', path.join(__dirname, 'src/views'))
app.set('view engine', 'ejs')

app.use('/', rootRouter)
app.use('/pots', post)

app.listen(3000, () => {
    console.log('Servidor ativo')
})