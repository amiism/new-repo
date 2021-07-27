const ForumPost = require('../models/ForumPost.js');

exports.testforumConnect = (req, res) => res.send('forumpost route testing!');

exports.displayAllForumPosts = (req, res) => {
    ForumPost.find()
    .then(forumposts => res.json(forumposts))
    .catch(err => res.status(404).json({ noforumpostsfound: 'No ForumPosts found' }));
};
exports.displayOneForumPost = (req, res) => {
    ForumPost.findById(req.params.id)
    .then(forumpost => res.json(forumpost))
    .catch(err => res.status(404).json({ noforumpostfound: 'No ForumPost found' }));
};

exports.createNewForumPost = (req, res) => {
    //Validate request
    if(!req.body.title){
        res.status(400).send({message: "Content cannot be empty"})
    }

    //create a forumpost using save method
    /*
    const newForumPost = new ForumPost({
        title: req.body.title,
        price: req.body.price,
        condition: req.body.price,
        description: req.body.description,
        availabiliy_status: req.body.availabiliy_status,
        payment: req.body.payment,
        shipping: req.body.shipping,
    }) 
    */

    //create the forumpost using create mongoose create method
    ForumPost.create(req.body)
    .then(forumpost => res.json(forumpost))
    .catch(err => res.status(400).json({ error: 'Unable to add this forumpost' }));

};

exports.updateForumPost = (req, res) => {
    //Validate request
    if(!req.body){
        res.status(400).send({message: "Content to update cannot be empty"})
    }

    ForumPost.findByIdAndUpdate(req.params.id, req.body)
    .then(forumpost => res.json({ msg: 'Updated successfully' }))
    .catch(err =>
      res.status(400).json({ error: 'Unable to update the Database' })
    );
};

exports.deleteForumPost = (req, res) => {
    ForumPost.findByIdAndRemove(req.params.id, req.body)
    .then(forumpost => res.json({ mgs: 'ForumPost entry deleted successfully' }))
    .catch(err => res.status(404).json({ error: 'No such a forumpost' }));
};
