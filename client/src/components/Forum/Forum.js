import React from "react";
import axios from "axios";
import "./Forum.css";

class Forum extends React.Component {
  state = {
    id: "",
    title: "",
    body: "",
    posts: [],
  };

  componentDidMount = () => {
    this.getForumPost();
  };

  getForumPost = () => {
    axios
      .get("/api")
      .then((response) => {
        const data = response.data;
        this.setState({ posts: data });
        console.log("Data has been received!!!");
      })
      .catch(() => {
        alert("Error retrieving data!!!");
      });
  };

  handleChange = ({ target }) => {
    const { name, value } = target;

    this.setState({
      [name]: value,
    });
  };

  submit = (event) => {
    event.preventDefault();

    const payload = {
      title: this.state.title,
      body: this.state.body,
    };

    axios({
      url: "/api/save",
      method: "POST",
      data: payload,
    })
      .then(() => {
        console.log("Data has been sent to the server");
        this.resetUserInputs();
        this.getForumpost();
      })
      .catch(() => {
        console.log("Internal server error");
      });
  };

  resetUserInputs = () => {
    this.setState({
      title: "",
      body: "",
    });
  };

  displayForumpost = (posts) => {
    if (!posts.length) return null;

    return posts.map((post, index) => (
      <div key={index} classname="forum-post__display">
        <h3>{post.title}</h3>
        <p>{post.body}</p>
      </div>
    ));
  };

  deletePost = (id) => {
    axios
      .delete("/save/:id")
      .then(() => {
        console.log("Post has been deleted");
        this.getForumpost();
      })
      .catch(() => {
        console.log("Error deleting post");
      });
  };

  render() {
    console.log("State: ", this.state);
    return (
      <div className="forum">
        <p>Forum</p>
        <form className="forum-box" onSubmit={this.submit}>
          <div className="forum-input">
            <input
              type="text"
              name="title"
              placeholder="Enter Title"
              value={this.state.title}
              onChange={this.handleChange}
            />
          </div>
          <div className="forum-input">
            <textarea
              placeholder="body"
              name="body"
              cols="30"
              rows="10"
              value={this.state.body}
              onChange={this.handleChange}
            ></textarea>
          </div>
          <button classname="submit" value="Add New Post">
            submit
          </button>
        </form>
        <div classname="forum">{this.displayForumpost(this.state.posts)}</div>
      </div>
    );
  }
}
export default Forum;
