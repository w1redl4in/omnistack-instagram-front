import React, { Component } from "react";
import api from "../services/api";
import "./new.css";
import { LocationState, History } from "history";

interface MyComponentProps {
  someOfYourOwnProps: any;
  history: History<LocationState>;
  someMorePropsIfNeedIt: any;
}

class New extends Component<MyComponentProps> {
  state = {
    image: "",
    author: "",
    place: "",
    description: "",
    hashtags: ""
  };

  handleSubmit = async (e: any) => {
    e.preventDefault();
    const data = new FormData();
    data.append("image", this.state.image);
    data.append("author", this.state.author);
    data.append("place", this.state.place);
    data.append("description", this.state.description);
    data.append("hashtags", this.state.hashtags);

    await api.post("posts", data);

    this.props.history.push("/");
  };

  handleImage = (e: any) => {
    this.setState({ image: e.target.files[0] });
  };

  handleChange = (e: any) => {
    this.setState({ [e.target.name]: e.target.value });
    console.log(this.state);
  };

  render() {
    return (
      <form action="" id="new-post" onSubmit={this.handleSubmit}>
        <input type="file" name="" id=" " onChange={this.handleImage} />
        <input
          type="text"
          name="author"
          id=""
          placeholder="Autor do post"
          onChange={this.handleChange}
        />
        <input
          type="text"
          name="place"
          id=""
          placeholder="Local do post"
          onChange={this.handleChange}
        />
        <input
          type="text"
          name="description"
          id=""
          placeholder="Descricao do post"
          onChange={this.handleChange}
        />
        <input
          type="text"
          name="hashtags"
          id=""
          placeholder="Hashtags"
          onChange={this.handleChange}
        />
        <button type="submit">Enviar</button>
      </form>
    );
  }
}

export default New;
