const mongoose = require('mongoose');

const ForumPostSchema = new mongoose.Schema({
    title: {
      type: String,
      required: true
    },
    description: {
      type: String,
      required: true
    },
    
});

module.exports = ForumPost = mongoose.model('forumpost', ForumPostSchema);