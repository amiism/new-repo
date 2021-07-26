const mongoose = require('mongoose');

const ForumPostSchema = new mongoose.Schema({
    username: {
      type: String,
      required: true
    },
    description: {
      type: String,
      required: true
    },
    tags: {
      type: String,
      required: true
    },
    likes: {
        type: Number,
        required: true
    },
    updated_date: {
      type: Date,
      default: Date.now
    }
});

module.exports = ForumPost = mongoose.model('forumpost', ForumPostSchema);