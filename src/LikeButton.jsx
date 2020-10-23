import React, {useState, useEffect} from "react";

// 関数名はファイル名と合わすのが一般的
const LikeButton = (props) => {
  // const [state変数名, state変更関数名] = useState(state初期値);
  const [count, counter] = useState(0);

  const countUp = () => {
    counter(count + 1)
  };

  useEffect( () => {
    // Mount時
    document.getElementById("counter").addEventListener('click', countUp)
    
    if(count >= 10) {
      counter(0);
    }

    return() => {
      // Unmount時
      document.getElementById("counter").removeEventListener('click', countUp)
    }
  });

  return(
    <button id={"counter"}>いいね数:{count}</button>
  )
}

export default LikeButton;