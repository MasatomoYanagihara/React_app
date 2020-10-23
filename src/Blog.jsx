import React from "react";
import Article from "./Article";


class Blog extends React.Component {
  constructor(props) {
    super(props);

    // stateはconstructor内に記述する
    this.state = {
      isPublished: false,
      count: 0,
    }
  };

  componentDidMount() {
    // ボタンがクリックされたらいいねをカウントアップする
    document.getElementById("counter").addEventListener('click', this.countUp)
  };
  
  componentDidUpdate() {
    // カウントが10以上になると0にする
    if(this.state.count >= 10) {
        this.setState({
          count: 0,
        })
    }
  };

  componentWillUnmount() {
    // イベントリスナーを解除
    document.getElementById("counter").removeEventListener('click', this.countUp)
  };

  // setStateは関数でラップするのが一般的
  togglePublished = () => {
    // stateを変更する時はsetStateを使用
    this.setState({
      isPublished: !this.state.isPublished,
    })
  };

  countUp = () => {
    this.setState({
      count: this.state.count + 1
    })
  };

  render() {
    return(
      <>
        <Article
          title={"Reactの使い方"}
          isPublished={this.state.isPublished}
          toggle={() => this.togglePublished()}
          count={this.state.count}
        />
      </>
    )
  };
};

export default Blog;