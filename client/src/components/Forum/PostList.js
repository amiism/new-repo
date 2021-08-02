import React, { Component } from "react";
import ReactDOM from "react-dom";
import { Link } from "react-router-dom";
import axios from "axios";
import "./PostList.css";

class PostList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      forumposts: [],
    };
  }

  componentDidMount() {
    axios.get("/api/forumposts").then((res) => {
      this.setState({ forumposts: res.data });
      console.log(this.state.forumposts);
    });
  }

  render() {
    return (
      <div class="post-list-container">
        <div>
          <div class="forumlist">
            <table className="tablecenter">
              <thead class="table-header">
                <tr>
                  <th className="titlecol">Title</th>
                  <th class="desccol">Description</th>
                </tr>
              </thead>
              <tbody class="table-row">
                {this.state.forumposts.map((forumpost) => (
                  <tr>
                    <td>
                      <Link to={`/forum/show-forumpost/${forumpost._id}`}>
                        {forumpost.title}
                      </Link>
                    </td>
                    <td>{forumpost.description}</td>
                  </tr>
                ))}
              </tbody>
            </table>
            <h4>
              <Link to="/forum/create-forumpost" className="addnewforumpost">
                <span
                  class="glyphicon glyphicon-plus-sign"
                  aria-hidden="true"
                ></span>{" "}
                Add Forum Post
              </Link>
            </h4>
          </div>
        </div>
      </div>
    );
  }
}

export default PostList;
