import React, { useState } from "react";

const NewPost = ({ handleNewPost }) => {
  const [imageUrl, setImageUrl] = useState("");
  const [imageDescription, setImageDescription] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    handleNewPost({ imageUrl, imageDescription, isLiked: false });
    setImageUrl("");
    setImageDescription("");
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-2xl m-auto">
      <div className="p-3">
        <label
          className="block text-gray-400 text-center font-medium font-noto-sans font-bold mb-2"
          htmlFor="image-url"
        >
          Enter an image url
        </label>
        <input
          id="image-url"
          type="text"
          value={imageUrl}
          onChange={(event) => setImageUrl(event.target.value)}
          className="bg-white appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-indigo-500"
        />
      </div>
      <div className="p-3">
        <label
          className="block text-gray-400 text-center font-medium font-noto-sans font-bold mb-2"
          htmlFor="image-description"
        >
          Give it a name
        </label>
        <input
          id="image-description"
          type="text"
          value={imageDescription}
          onChange={(event) => setImageDescription(event.target.value)}
          className="bg-white appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-indigo-500"
        />
      </div>
      <div className="p-3 text-center">
        <button
          className="w-80 bg-black hover:bg-indigo-700 text-white font-medium py-4 px-20 rounded focus:outline-none focus:shadow-outline"
          type="submit"
        >
          Post Now!
        </button>
      </div>
    </form>
  );
};

export default NewPost;
