const mongoose = require('mongoose')

const postSchema = mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "user"
  }
    
})

const userSchema = mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "user"
    },
    date: {
        type: Date,
        default: Date.now
    },
    content: String,
    likes: [
        {type: mongoose.Schema.Types.ObjectId, ref: "user"}
    ]
})

module.exports = mongoose.model("user", userSchema);