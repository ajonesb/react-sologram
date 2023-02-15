import "./App.css";
import React, { useState, useEffect } from "react";

// Components
import MainFeed from "./components/MainFeed";
import NewPost from "./components/NewPost";
import Header from "./components/Header";
import { FaHome, FaPlusSquare } from "react-icons/fa";

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

  const handleNewPost = (newPost, filter) => {
    setPosts([...posts, newPost, filter]);
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
      <div className="bg-white p-6 flex justify-between items-center">
        <nav className="flex">
          <button
            className={`${
              currentTab === "Main Feed" ? "underline" : ""
            } px-4 text-black font-medium hover:underline`}
            onClick={() => {
              setShowNewPost(false);
              handleTabChange("Main Feed");
            }}
          >
            <FaHome size="1.5em" />
          </button>
          <button
            className={`${
              currentTab === "New Post" ? "underline" : ""
            } px-4 text-black font-medium hover:underline`}
            onClick={() => {
              setShowNewPost(!showNewPost);
              handleTabChange("New Post");
            }}
            style={{ color: showNewPost ? "grey" : "black" }}
          >
            <FaPlusSquare size="1.5em" />
          </button>
        </nav>
      </div>
    </div>
  );
};

export default App;
