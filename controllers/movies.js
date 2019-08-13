const Movie = require('../models/movie')

async function moviesIndex(ctx) {
  ctx.body = await Movie.find().exec()
}

async function moviesShow(ctx) {
  const movie = await Movie.findById(ctx.params.id).exec()
  if(!movie) return ctx.status = 404

  ctx.body = movie
}

async function moviesCreate(ctx) {
  ctx.body = await Movie.create(ctx.request.body)
}

async function moviesUpdate(ctx) {
  let movie = await Movie.findById(ctx.params.id).exec()
  if(!movie) return ctx.status = 404

  movie = Object.assign(movie, ctx.request.body)
  
  ctx.body = await movie.save()
}

async function moviesDelete(ctx) {
  const movie = await Movie.findById(ctx.params.id).exec()
  if(!movie) return ctx.status = 404

  await movie.remove()
  ctx.body = null
}

module.exports = {
  index: moviesIndex,
  show: moviesShow,
  create: moviesCreate,
  update: moviesUpdate,
  delete: moviesDelete
}