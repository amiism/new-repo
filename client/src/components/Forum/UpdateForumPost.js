import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

class UpdateForumPost extends Component {

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

  onChange = (e) => {
    const state = this.state.forumpost
    state[e.target.name] = e.target.value;
    this.setState({forumpost:state});
  }

  onSubmit = (e) => {
    e.preventDefault();

    const { title, description, } = this.state.forumpost;

    axios.put('/api/forumposts/'+this.props.match.params.id, { title, description })
      .then((result) => {
        this.props.history.push("/forum/show-forumpost/"+this.props.match.params.id)
      });
  }

  render() {
    return (
      <div class="container">
        <div class="panel panel-default">
          <div class="panel-heading">
            <h3 class="panel-title">
              EDIT BOOK
            </h3>
          </div>
          <div class="panel-body">
            <h4><Link to={`/forum/show-forumpost/${this.state.forumpost._id}`}><span class="glyphicon glyphicon-eye-open" aria-hidden="true"></span> Book List</Link></h4>
            <form onSubmit={this.onSubmit}>
              
              <div class="form-group">
                <label for="title">Title:</label>
                <input type="text" class="form-control" name="title" value={this.state.forumpost.title} onChange={this.onChange} placeholder="Title" />
              </div>
              
              <div class="form-group">
                <label for="description">Description:</label>
                <input type="text" class="form-control" name="description" value={this.state.forumpost.description} onChange={this.onChange} placeholder="Description" />
              </div>
              
              <button type="submit" class="btn btn-default">Submit</button>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default UpdateForumPost;