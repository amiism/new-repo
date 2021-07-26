const forumposts = require('../../controllers/forumposts.js');
var router = require("express").Router();

module.exports = app => {
        
    router.get("/testforumpost", forumposts.testforumConnect);
    router.get("/", forumposts.displayAllForumPosts);
    router.get("/:id", forumposts.displayOneForumPost);
    router.post("/", forumposts.createNewForumPost);
    router.put("/:id", forumposts.updateForumPost);
    router.delete("/:id", forumposts.deleteForumPost);
    app.use("/api/forumposts", router);
};