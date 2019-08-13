const User = require('../models/user')
const jwt = require('jsonwebtoken')
const { secret } = require('../config/environment')

async function register(ctx) {
  ctx.body = await User.create(ctx.request.body)
}

async function login(ctx) {
  const user = await User.findOne({ email: ctx.request.body.email }).exec()
  if(!user || !user.validatePassword(ctx.request.body.password)) return ctx.status = 401

  ctx.body = { token: jwt.sign({ id: user.id }, secret, { expiresIn: '2h' }) }
}

module.exports = {
  register,
  login
}