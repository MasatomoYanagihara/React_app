import React, { Component } from "react";
import "./App.css";

// コンテキストの作成
const Context = React.createContext({
  title: "Title",
  message: "this is sample message.",
});

class App extends Component {
  render() {
    return (
      <div>
        <h1>Context</h1>
        <Title />
        <Message />
      </div>
    );
  }
}

class Title extends Component {
  // クラス内でコンテキストを使用する時に記述
  static contextType = Context;

  render() {
    return (
      <div>
        <h2>{this.context.title}</h2>
      </div>
    );
  }
}

class Message extends Component {
  // クラス内でコンテキストを使用する時に記述
  static contextType = Context;

  render() {
    return (
      <div>
        <p>{this.context.message}</p>
      </div>
    );
  }
}

export default App;
