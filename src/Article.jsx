import React, {useState} from "react";
import LikeButton from "./LikeButton";

const Article = (props) => {
  // const [state変数名, state変更関数名] = useState(state初期値);
  const [isPublished, togglePublished] = useState(false);

  return (
    <div>
      <h2>{props.title}</h2>
      <label htmlFor="check">公開状態：</label>
      <input 
      id="check" 
      type="checkbox" 
      checked={isPublished} 
      onClick={() => togglePublished(!isPublished)}
      />
      <LikeButton />
    </div>
  )
}

export default Article;