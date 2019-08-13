module.exports = async function errorHandler(ctx, next) {
  try {
    await next()
  } catch(err) {
    ctx.status = err.statusCode || err.status || 500
    ctx.body = { message: err.message }
  }
}