import React, { Component } from "react";
import api from "../services/api";
import "./feed.css";
const more = require("../assets/more.svg");
const like = require("../assets/like.svg");
const comment = require("../assets/comment.svg");
const send = require("../assets/send.svg");

class Feed extends Component {
  state = {
    feed: []
  };

  async componentDidMount() {
    const response = await api.get("posts");
    this.setState({ feed: response.data });
  }

  handleClick = async (id: any) => {
    await api.post(`post/${id}/like`);
  };

  render() {
    return (
      <section id="post-list">
        {this.state.feed.map((post: any) => (
          <article key={post._id}>
            <header>
              <div className="user-info">
                <span>{post.author}</span>
                <span className="place">{post.place}</span>
              </div>
              <img src={more} alt="Mais" />
            </header>
            <img
              src={`http://localhost:3333/files/${post.image}`}
              alt={`${post.image}`}
            />
            <footer>
              <div className="actions">
                <button onClick={() => this.handleClick(post._id)}>
                  <img src={like} alt="" />
                </button>
                <img src={comment} alt="" />
                <img src={send} alt="" />
              </div>
              <strong>{post.likes} curtidas</strong>
              <p>
                {post.description}
                <span>{post.hashtags}</span>
              </p>
            </footer>
          </article>
        ))}
      </section>
    );
  }
}

export default Feed;
