import React from "react";
import Article from "./Article";


class Blog extends React.Component {
  constructor(props) {
    super(props);

    // stateはconstructor内に記述する
    this.state = {
      isPublished: false,
    }
  }

  // setStateは関数でラップするのが一般的
  togglePublished = () => {
    // stateを変更する時はsetStateを使用
    this.setState({
      isPublished: !this.state.isPublished
    })
  }

  render() {
    return(
      <div>
        <Article title={"Reactの使い方"} isPublished={this.state.isPublished} toggle={() => 
          this.togglePublished()
        }/>
      </div>
    )
  }
}

export default Blog;