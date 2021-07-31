import React, { Component } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

class DisplayForumPost extends Component {
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

  delete(id) {
    console.log(id);
    axios.delete("/api/forumposts/" + id).then((result) => {
      this.props.history.push("/forum");
    });
  }

  render() {
    return (
      <div>
        <div class="panel panel-default">
          <div className="forumpost-box">
            <h3 className="forum-details">Forum Post Details</h3>
            <div>
              <h4 className="posttitle">Title:</h4>
              <p className="panel-title">{this.state.forumpost.title}</p>
            </div>
            <div>
              <dl className="postdescription">
                <h4 className="postdesc">Description:</h4>
                <p className="panel-desc">{this.state.forumpost.description}</p>
              </dl>
              <Link
                to={`/forum/edit-forumpost/${this.state.forumpost._id}`}
                className="editforumpost"
              >
                Edit
              </Link>
              &nbsp;
              <button
                onClick={this.delete.bind(this, this.state.forumpost._id)}
                class="btn btn-danger"
              >
                Delete
              </button>
              <h4>
                <div>
                  <Link to="/forum" className="button-returnforum">
                    Return to Forum Posts
                  </Link>
                </div>
              </h4>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default DisplayForumPost;
