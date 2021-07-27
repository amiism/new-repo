import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import PostList from './PostList';
import ForumPostCreate from './ForumPostCreate';
import UpdateForumPost from './UpdateForumPost';
import DisplayForumPost from './DisplayForumPost';

function Forum() {
  return (
    <div>
      <h1>Forum</h1>
      <Router>
          <div>
              <Route exact path='/forum' component={PostList} />
              <Route path='/forum/create-forumpost' component={ForumPostCreate} />
              <Route path='/forum/edit-forumpost/:id' component={UpdateForumPost} />
              <Route path='/forum/show-forumpost/:id' component={DisplayForumPost} />
          </div>
      </Router>
    </div>
  );
}

export default Forum;


