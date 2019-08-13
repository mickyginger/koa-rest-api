module.exports = {
  port: process.env.PORT || 3000,
  dbURI: process.env.MONGODB_URI || 'mongodb://localhost/koa-rest-api',
  secret: process.env.TOKEN_SECRET || 'hfluwlr&sd!?Gsd'
}