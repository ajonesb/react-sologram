import React from "react";
import { FaHome, FaPlusSquare } from "react-icons/fa";

const Navigation = ({
  currentTab,
  handleTabChange,
  setShowNewPost,
  showNewPost,
}) => {

  return (
    <nav className="flex basis-full justify-between items-center max-w-[60%] m-auto">
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
  );
};

export default Navigation;
