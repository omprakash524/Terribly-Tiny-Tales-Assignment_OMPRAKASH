import { useEffect } from "react";
import Header from "../../components/header";
import Post from "../../components/post";
import Profile from "../../components/profile";
import posts from "../../mocks/db/posts.json";
import profile from "../../mocks/db/userInfo.json";

export default function Home() {

  
  return (
    <div className="home">
      <Header></Header>
      <Profile profile={profile} />
      {posts.map((post) => {
        return <Post post={post} />;
      })}
    </div>
  );
}
