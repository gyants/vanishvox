import mongoose from "mongoose";
const { Schema, model, models } = mongoose;

const postSchema = new Schema({
    message: {
        type: String,
        required: [true, 'Message is required']
    },
    postTime: {
        type: Date,
        default: Date.now,
    },
    replies: {
      type: [
          {
              message: {
                  type: String,
                  required: [true, 'Message is required']
              },
          }
      ],
      default: [] // Default to an empty array
    },
})

const Post = models.Post || model('Post', postSchema)

export default Post