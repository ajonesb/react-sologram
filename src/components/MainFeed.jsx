import React, { useState, useEffect } from "react";
import { FaHeart, FaRegHeart } from "react-icons/fa";
import { useTranslation } from "react-i18next";

const MainFeed = ({ posts, handleLike, selectedFilter }) => {
  const [localPosts, setLocalPosts] = useState(
    JSON.parse(localStorage.getItem("posts")) || posts
  );

  useEffect(() => {
    localStorage.setItem("posts", JSON.stringify(localPosts));
  }, [localPosts]);

  const [postsToShow, setPostsToShow] = useState(localPosts.slice(0, 2));

  const handleLoadMore = () => {
    setPostsToShow(localPosts.slice(0, postsToShow.length + 2));
  };

  const handleLikeLocal = (index) => {
    const updatedPosts = [...localPosts];
    updatedPosts[index].isLiked = !updatedPosts[index].isLiked;
    setLocalPosts(updatedPosts);
    handleLike(index);
  };

  const { t } = useTranslation();

  return (
    <div className="mt-[0px] md:mt-[50px] grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 animate__animated animate__fadeIn">
      {postsToShow.map((post, index) => (
        <div
          key={index}
          className="relative bg-white rounded-lg shadow-lg overflow-hidden"
          style={{ paddingBottom: "100%" }}
        >
          <img
            src={post.imageUrl}
            alt=""
            className="absolute top-0 h-full w-full object-cover transition duration-300 transform hover:scale-110"
            style={{ filter: post.filter }}
            onDoubleClick={() => handleLikeLocal(index)}
          />
          {index === 0 && selectedFilter !== "none" && (
            <div
              className="absolute top-0 left-0 h-full w-full"
              style={{ filter: selectedFilter }}
            ></div>
          )}
          <div className="bg-white text-black absolute p-2 top-0 w-full">
            <p className="text-xl font-noto-sans font-bold">{post.title}</p>
          </div>

          <div className="absolute bottom-0 right-0 m-6">
            {post.isLiked ? (
              <FaHeart
                className="text-red-600 hover:text-red-700 cursor-pointer"
                onClick={() => handleLikeLocal(index)}
                size="1.5em"
                title={t("liked")}
              />
            ) : (
              <FaRegHeart
                className="text-red-600 hover:text-red-700 cursor-pointer"
                onClick={() => handleLikeLocal(index)}
                size="1.5em"
                title={t("not-liked")}
              />
            )}
          </div>
        </div>
      ))}

      {postsToShow.length < localPosts.length && (
        <div className="mb-[80px] p-6">
          <button
            className="bg-indigo-600 text-white py-3 px-5 rounded-full hover:bg-indigo-700"
            onClick={handleLoadMore}
          >
            {t("load-more-button-label")}
          </button>
        </div>
      )}
    </div>
  );
};

export default MainFeed;
