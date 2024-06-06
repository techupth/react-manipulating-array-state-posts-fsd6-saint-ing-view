import { useState } from "react";
import postList from "./PostArray";

function Posts() {
  const [likeList, setLikeList] = useState(postList);

  const handleAddLike = (index) => {
    let newLike = [...likeList];
    newLike[index].likes += 1;
    setLikeList(newLike);
  };
  const handleAddUnLike = (index) => {
    let newLike = [...likeList];
    if (newLike[index].likes > 0) {
      newLike[index].likes -= 1;
      setLikeList(newLike);
    }
  };
  return (
    <div className="app-wrapper">
      <h1 className="app-title">Posts</h1>
      {postList.map((item, index) => {
        return (
          <div key={index} className="post-list">
            <div className="post-item">
              <div className="post-header">
                <h2>
                  {item.title}#{item.id}
                </h2>
                <div className="post-social-media-stats">
                  <span className="stats-topic">Likes: </span>
                  <span className="post-likes">{item.likes}</span>
                </div>
                <p className="post-content">{item.content}</p>
                <div className="post-actions">
                  <button
                    className="like-button"
                    onClick={() => handleAddLike(index)}
                  >
                    Like
                  </button>
                  <button
                    className="dislike-button"
                    onClick={() => handleAddUnLike(index)}
                  >
                    Dislike
                  </button>
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default Posts;
