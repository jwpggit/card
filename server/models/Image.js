const mongoose = require('mongoose')
const { Schema } = mongoose

const imageSchema = new Schema({
  url: { type: String },
  posts: {
    type: Schema.Types.ObjectId,
    ref: 'Post'
  },
}, 
{
  timestamps: true
})

imageSchema.set('toJSON', {
  transform: (document, returnedObject) => {
    returnedObject.id = returnedObject._id

    delete returnedObject._id
    delete returnedObject.__v
  }
})

module.exports = mongoose.model('Image', imageSchema)
