import "./App.css";
import React, { useState, useEffect } from "react";

// Components
import MainFeed from "./components/MainFeed";
import NewPost from "./components/NewPost";
import Header from "./components/Header";
import Navigation from "./components/Navigation";

const App = () => {
  const [currentTab, setCurrentTab] = useState("Main Feed");
  const [posts, setPosts] = useState([]);
  const [showNewPost, setShowNewPost] = useState(false);

  useEffect(() => {
    const storedPosts = JSON.parse(localStorage.getItem("posts")) || [];
    setPosts(storedPosts);
  }, []);

  useEffect(() => {
    localStorage.setItem("posts", JSON.stringify(posts));
  }, [posts]);

  const handleTabChange = (tab) => {
    setCurrentTab(tab);
  };

  const handleNewPost = (newPost) => {
    setPosts([...posts, newPost]);
  };

  const handleLike = (index) => {
    const updatedPosts = [...posts];
    updatedPosts[index].isLiked = !updatedPosts[index].isLiked;
    setPosts(updatedPosts);
  };

  return (
    <div className="flex flex-col">
      <Header />
      <main className="flex-1">
        {showNewPost && <NewPost handleNewPost={handleNewPost} />}
        <MainFeed posts={posts} handleLike={handleLike} />
      </main>
      <div className="bg-white p-3 flex fixed bottom-0 w-full justify-between content-between items-center border-t-2 border-neutral-200">
        <Navigation
          currentTab={currentTab}
          handleTabChange={handleTabChange}
          setShowNewPost={setShowNewPost}
          showNewPost={showNewPost}
        />
      </div>
    </div>
  );
};

export default App;
