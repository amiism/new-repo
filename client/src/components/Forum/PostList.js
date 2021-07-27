import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Link } from 'react-router-dom';
import axios from 'axios';
import './PostList.css';

class PostList extends Component {

  constructor(props) {
    super(props);
    this.state = {
      forumposts: []
    };
  }

  componentDidMount() {
    axios.get('/api/forumposts')
      .then(res => {
        this.setState({ forumposts: res.data });
        console.log(this.state.forumposts);
      });
  }

  render() {
    return (
      <div class="container">
        <div class="panel panel-default">
          <div class="panel-heading">
            <h3 class="panel-title">
              BOOK CATALOG
            </h3>
          </div>
          <div class="panel-body center">
            <h4><Link to="/forum/create-forumpost"><span class="glyphicon glyphicon-plus-sign" aria-hidden="true"></span> Add ForumPost</Link></h4>
            <table class="table table-stripe">
              <thead>
                <tr>
                  
                  <th>Title</th>
                  <th>Description</th>
                </tr>
              </thead>
              <tbody>
                {this.state.forumposts.map(forumpost =>
                  <tr>
                    <td><Link to={`/forum/show-forumpost/${forumpost._id}`}>{forumpost.title}</Link></td>
                    <td>{forumpost.description}</td>
                    
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    );
  }
}

export default PostList;