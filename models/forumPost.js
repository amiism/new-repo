const mongoose = require("mongoose");

//Schema
const Schema = mongoose.Schema;
const ForumPostSchema = new Schema({
  title: String,
  body: String,
  date: {
    type: String,
    default: Date.now(),
  },
});

//Model
const ForumPost = mongoose.model("Forumpost", ForumPostSchema);

module.exports = forumPost;
