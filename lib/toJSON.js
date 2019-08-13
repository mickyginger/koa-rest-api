module.exports = function toJSON(schema) {
  schema.set('toJSON', {
    virtuals: true,
    transform(doc, json) {
      delete json.__v
      delete json._id
      delete json.password
      return json
    }
  })
}