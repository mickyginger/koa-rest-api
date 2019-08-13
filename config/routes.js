const router = new require('koa-router')()
const secureRoute = require('../lib/secureRoute')

const movies = require('../controllers/movies')
const auth = require('../controllers/auth')

router.get('/movies', movies.index)
router.post('/movies', secureRoute, movies.create)
router.get('/movies/:id', movies.show)
router.put('/movies/:id', secureRoute, movies.update)
router.delete('/movies/:id', secureRoute, movies.delete)

router.post('/register', auth.register)
router.post('/login', auth.login)

module.exports = router