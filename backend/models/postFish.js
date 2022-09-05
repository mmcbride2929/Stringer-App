import mongoose from 'mongoose'

const postSchema = mongoose.Schema({
  species: String,
  selectedFile: String,
  length: Number,
  weight: Number,
  //coordinates:String,
  waterType: String,
  bait: String,
  creator: String,
  likeCount: { type: Number, default: 0 },
  createdAt: {
    type: Date,
    default: new Date(),
  },
})

const PostMessage = mongoose.model('PostMessage', postSchema)

export default PostMessage
