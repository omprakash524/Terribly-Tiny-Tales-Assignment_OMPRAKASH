import "./style.css";

export default function Post({ post }) {
  return (
    <div className="post">
      <div className="post-des">
        <p className="heading">{post.heading}</p>
        <div className="like-icon-container">
          <img
            src="https://cdn-icons-png.flaticon.com/512/783/783343.png" alt="image"></img>
        </div>
      </div>
      <div className="description">
        <p className="description--text">{post.description}</p>
      </div>
      <div className="footer">
        <p className="text">
          <span>{post.category} </span>by {post.auther}
        </p>
        <div>
          <p className="date">{post.date}•</p>
          <p className="read--time">{post.timeToRead} min Read•</p>
          <p className="views">{post.views} Views</p>
        </div>
      </div>
    </div>
  );
}
