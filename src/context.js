import React, { Component } from "react";
import axios from "axios";

const PostContext = React.createContext();
class PostProvidor extends Component {
  constructor(props) {
    super(props);
    this.state = {
     tt: "i am from context"
    };
  }

  getPosts = (id) => {
      alert(id)
  }

  render() {
    return (
      <PostContext.Provider
        value={{
          ...this.state,
          getPosts: this.getPosts,
          
        }}
      >
        {this.props.children}
      </PostContext.Provider>
    );
  }
}
const PostConsumer = PostContext.Consumer;

export { PostProvidor, PostConsumer, PostContext };
