import React from "react";

// 関数名はファイル名と合わすのが一般的
const LikeButton = (props) => {
  // return{}ではなくreturn()
  return(
    <button id={"counter"}>いいね数:{props.count}</button>
  )
}

export default LikeButton;