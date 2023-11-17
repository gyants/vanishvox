import mongoose from "mongoose";
const { Schema, model, models } = mongoose;

const validateMessageLength = (message) => {
    return message.length <= 400;
};


const postSchema = new Schema({
    message: {
        type: String,
        required: [true, 'Message is required'],
        maxlength: [400, 'Message should not be longer than 400 characters'],
        validate: [validateMessageLength, 'Message should not be longer than 400 characters'],
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
                  required: [true, 'Message is required'],
                  maxlength: [400, 'Message should not be longer than 400 characters'],
                  validate: [validateMessageLength, 'Message should not be longer than 400 characters'],
              },
          }
      ],
      default: [] // Default to an empty array
    },
})

const Post = models.Post || model('Post', postSchema)

export default Post