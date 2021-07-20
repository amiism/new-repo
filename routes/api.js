const express = require("express");
const router = express.Router();
const ForumPost = require("./models/forumPost");

router.get("/api", (req, res) => {
  ForumPost.find({})
    .then((data) => {
      console.log("Data: ", data);
      res.json(data);
    })
    .catch((error) => {
      console.log("error: ", error);
    });
});

router.get("/api/name", (req, res) => {
  const data = {
    username: "brigitte",
    age: 14,
  };
  res.json(data);
});

module.exports = router;
