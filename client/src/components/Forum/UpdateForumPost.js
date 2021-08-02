import React, { Component } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

class UpdateForumPost extends Component {
  constructor(props) {
    super(props);
    this.state = {
      forumpost: {},
    };
  }

  componentDidMount() {
    axios.get("/api/forumposts/" + this.props.match.params.id).then((res) => {
      this.setState({ forumpost: res.data });
      console.log(this.state.forumpost);
    });
  }

  onChange = (e) => {
    const state = this.state.forumpost;
    state[e.target.name] = e.target.value;
    this.setState({ forumpost: state });
  };

  onSubmit = (e) => {
    e.preventDefault();

    const { title, description } = this.state.forumpost;

    axios
      .put("/api/forumposts/" + this.props.match.params.id, {
        title,
        description,
      })
      .then((result) => {
        this.props.history.push(
          "/forum/show-forumpost/" + this.props.match.params.id
        );
      });
  };

  render() {
    return (
      <div class="container">
        <div class="panel panel-default">
          <div class="panel-heading"></div>
          <div class="panel-body">
            <form onSubmit={this.onSubmit}>
              <div className="post-edit-box">
                <h3 class="editpost-heading">Edit Forum Post</h3>
                <div class="updateform-group">
                  <label for="title" className="title">
                    Title:
                  </label>
                  <input
                    type="text"
                    name="title"
                    value={this.state.forumpost.title}
                    onChange={this.onChange}
                    placeholder="Title"
                  />
                </div>

                <div class="updateform-group">
                  <label for="description" className="description">
                    Description:
                  </label>
                  <input
                    type="text"
                    name="description"
                    value={this.state.forumpost.description}
                    onChange={this.onChange}
                    placeholder="Description"
                  />
                </div>

                <button type="submit" className="button-editpost">
                  Edit Post
                </button>
                <h4>
                  <div className="returnpostdetails">
                    <Link
                      to={`/forum/show-forumpost/${this.state.forumpost._id}`}
                    >
                      Return to Post Details
                    </Link>
                  </div>
                </h4>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default UpdateForumPost;
