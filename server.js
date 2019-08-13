const Koa = require('koa')
const app = new Koa()

const mongoose = require('mongoose')
mongoose.plugin(require('./lib/toJSON'))
mongoose.Promise = require('bluebird')

const bodyParser = require('koa-bodyparser')

const { port, dbURI } = require('./config/environment')
const router = require('./config/routes')
const errorHandler = require('./lib/errorHandler')

mongoose.connect(dbURI)

app.use(errorHandler)

app.use(bodyParser())
app.use(router.routes())

app.listen(port, () => console.log(`Koa is listening to port ${port}`))
