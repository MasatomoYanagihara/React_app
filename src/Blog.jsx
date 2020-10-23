import React from "react";
import Article from "./Article";


class Blog extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return(
      <div>
        <Article title={"タイトル1"} />
        <Article title={"タイトル2"} />
        <Article title={"タイトル3"} />
      </div>
    )
  }
}

export default Blog;