const express = require("express");
const router = express.Router();
const ForumPost = require("./forumPost");

router.get("/", (req, res) => {
  ForumPost.find({})
    .then((data) => {
      console.log("Data: ", data);
      res.json(data);
    })
    .catch((error) => {
      console.log("error: ", error);
    });
});

router.post("/save", (req, res) => {
  console.log("Body: ", req.body);
  const data = req.body;

  const newForumPost = new ForumPost(data);

  //.save
  newForumPost.save((error) => {
    if (error) {
      res.status(500).json({ msg: "sorry, internal server" });
    }
    //ForumPost
    return res.json({
      msg: "Your data has been saved!!!!",
    });
  });
});

router.get("/name", (req, res) => {
  const data = {
    username: "brigitte",
    age: 14,
  };
  res.json(data);
});

module.exports = router;
