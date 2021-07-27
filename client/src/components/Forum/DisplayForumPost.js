import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

class DisplayForumPost extends Component {

  constructor(props) {
    super(props);
    this.state = {
      forumpost: {}
    };
  }

  componentDidMount() {
    axios.get('/api/forumposts/'+this.props.match.params.id)
      .then(res => {
        this.setState({ forumpost: res.data });
        console.log(this.state.forumpost);
      });
  }

  delete(id){
    console.log(id);
    axios.delete('/api/forumposts/'+id)
      .then((result) => {
        this.props.history.push("/forum")
      });
  }

  render() {
    return (
      <div class="container">
        <div class="panel panel-default">
        <h4><Link to="/forum"><span class="glyphicon glyphicon-th-list" aria-hidden="true"></span> ForumPost List</Link></h4>

          <div class="panel-heading">
              Title: 
            <h3 class="panel-title">
              {this.state.forumpost.title}
            </h3>
          </div>
          <div class="panel-body">
            <dl>
              
              <dt>Description:</dt>
              <dd>{this.state.forumpost.description}</dd>
              
            </dl>
            <Link to={`/forum/edit-forumpost/${this.state.forumpost._id}`} class="btn btn-success">Edit</Link>&nbsp;
            <button onClick={this.delete.bind(this, this.state.forumpost._id)} class="btn btn-danger">Delete</button>
          </div>
        </div>
      </div>
    );
  }
}

export default DisplayForumPost;