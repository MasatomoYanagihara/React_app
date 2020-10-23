import React from "react";
import Article from "./Article";


const Blog =  () => {

  // componentDidMount() {
  //   // ボタンがクリックされたらいいねをカウントアップする
  //   document.getElementById("counter").addEventListener('click', this.countUp)
  // };
  
  // componentDidUpdate() {
  //   // カウントが10以上になると0にする
  //   if(this.state.count >= 10) {
  //       this.setState({
  //         count: 0,
  //       })
  //   }
  // };

  // componentWillUnmount() {
  //   // イベントリスナーを解除
  //   document.getElementById("counter").removeEventListener('click', this.countUp)
  // };

  // countUp = () => {
  //   this.setState({
  //     count: this.state.count + 1
  //   })
  // };


    return(
      <>
        <Article
          title={"Reactの使い方"}
          // count={this.state.count}
        />
      </>
    )
};

export default Blog;