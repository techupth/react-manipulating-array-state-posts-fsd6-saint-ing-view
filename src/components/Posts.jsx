import { useState } from "react";

function Posts() {
  const initialPosts = [
    { title: "Paper Clips", likes: 61 },
    { title: "Born to Kill", likes: 46 },
    { title: "Ten Shrews, The (Kymmenen riivinrautaa)", likes: 50 },
    { title: "Ciel est Ã  vous, Le (Woman Who Dared, The)", likes: 3 },
    { title: "Tigger Movie, The", likes: 66 },
    { title: "Cat People", likes: 70 },
    { title: "Brooklyn Castle", likes: 46 },
    { title: "Snow Angels", likes: 1 },
    { title: "Rose Tattoo, The", likes: 20 },
    { title: "It's A Wonderful World", likes: 6 },
  ];

  const [posts, setPosts] = useState(initialPosts);

  const handleLike = (index) => {
    const newPosts = [...posts];
    newPosts[index].likes += 1;
    setPosts(newPosts);
  };
  const handleDislike = (index) => {
    const newPosts = [...posts];
    if (newPosts[index].likes >= 1) {
      newPosts[index].likes -= 1;
      setPosts(newPosts);
    }
  };

  return (
    <div className="app-wrapper">
      <h1 className="app-title">Posts</h1>
      <div className="post-list">
        {posts.map((post, index) => (
          <div key={index} className="post-item">
            <div className="post-header">
              <h2>{post.title}</h2>
              <div className="post-social-media-stats">
                <span className="stats-topic">Likes: </span>
                <span className="post-likes">{post.likes}</span>
              </div>
            </div>
            <p className="post-content">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus
              vel turpis vestibulum, aliquet ipsum vitae, auctor risus. Morbi
              tincidunt, leo non molestie consectetur, elit libero faucibus
              tellus, sed fringilla tortor libero sit amet odio. Maecenas sed
              ante condimentum mauris euismod pellentesque eu eu justo...
            </p>
            <div className="post-actions">
              <button className="like-button" onClick={() => handleLike(index)}>
                Like
              </button>
              <button
                className="dislike-button"
                onClick={() => handleDislike(index)}
              >
                Dislike
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Posts;
