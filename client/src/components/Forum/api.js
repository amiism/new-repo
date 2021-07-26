import "./forumPost";
const express = require("express");
const router = express.Router();

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

router.delete("/save/:id", (req, res) => {
  const id = req.params.id;
  ForumPost.findByIdAndDelete(id, (error) => {
    if (error) {
      console.log("error in deleting!");
      throw error;
    } else {
      console.log("post has been deleted");
    }
  });
});

module.exports = router;
