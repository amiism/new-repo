import React, { Component } from "react";
import ReactDOM from "react-dom";
import axios from "axios";
import { Link } from "react-router-dom";

class CreateForumPost extends Component {
  constructor() {
    super();
    this.state = {
      title: "",
      description: "",
    };
  }
  onChange = (e) => {
    const state = this.state;
    state[e.target.name] = e.target.value;
    this.setState(state);
  };

  onSubmit = (e) => {
    e.preventDefault();

    const { title, description } = this.state;

    axios.post("/api/forumposts", { title, description }).then((result) => {
      this.props.history.push("/forum");
    });
  };

  render() {
    const { title, description } = this.state;
    return (
      <div class="forum-box">
        <div class="panel panel-default">
          <div class="nil">
            <h3 class="Forum-heading">What are you posting today?</h3>
          </div>
          <div class="panel-body">
            <h4>
              <Link to="/forum">
                <span class="return-forum" aria-hidden="true"></span> Forum Post
                List
              </Link>
            </h4>
            <form onSubmit={this.onSubmit}>
              <div class="forum-input">
                <input
                  type="text"
                  class="form-control"
                  name="title"
                  value={title}
                  onChange={this.onChange}
                  placeholder="Title"
                />
              </div>

              <div class="forum-input">
                <textArea
                  class="form-control"
                  name="description"
                  onChange={this.onChange}
                  placeholder="Description"
                  cols="80"
                  rows="3"
                >
                  {description}
                </textArea>
              </div>

              <button type="submit" classname="addnewpost">
                Add New Post
              </button>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default CreateForumPost;
