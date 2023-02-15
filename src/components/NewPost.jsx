import React, { useState } from "react";

const NewPost = ({ handleNewPost }) => {
  const [imageUrl, setImageUrl] = useState("");
  const [imageDescription, setImageDescription] = useState("");
  const [confirmation, setConfirmation] = useState("");
  const [selectedFilter, setSelectedFilter] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    if (imageUrl === "" || imageDescription === "") {
      alert("Both Image URL and Title are required!");
    } else {
      handleNewPost(
        {
          imageUrl,
          title: imageDescription,
          isLiked: false,
        },
        selectedFilter
      );
      setConfirmation("Post created!");
      setImageUrl("");
      setImageDescription("");
      setSelectedFilter("");
    }
  };

  const filterOptions = [
    { name: "None", filter: "none" },
    { name: "Grayscale", filter: "grayscale(100%)" },
    { name: "Sepia", filter: "sepia(100%)" },
    { name: "Contrast", filter: "contrast(150%)" },
  ];

  return (
    <form onSubmit={handleSubmit} className="max-w-2xl m-auto">
      {confirmation && (
        <div className="p-3 text-center">
          <p className="text-indigo-500 font-medium">{confirmation}</p>
        </div>
      )}
      <div className="p-3">
        <label
          className="block text-gray-400 text-center font-noto-sans font-extrabold mb-2"
          htmlFor="image-url"
        >
          Enter an image URL
        </label>
        <input
          id="image-url"
          type="text"
          value={imageUrl}
          onChange={(event) => setImageUrl(event.target.value)}
          className="bg-white appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700"
          required
        />
      </div>
      <div className="p-3">
        <label
          className="block text-blue-700 text-center font-noto-sans font-extrabold mb-2"
          htmlFor="image-description"
        >
          Give it a name:
        </label>
        <input
          id="image-description"
          type="text"
          value={imageDescription}
          onChange={(event) => setImageDescription(event.target.value)}
          className="bg-white appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-indigo-500"
          required
        />
      </div>
     
      <div className="p-3">
        <label
          className="block text-gray-400 text-center font-medium font-noto-sans font-bold mb-2"
          htmlFor="filter-select"
        >
         
        </label>
        <select
          id="filter-select"
          value={selectedFilter}
          onChange={(event) => setSelectedFilter(event.target.value)}
          className="bg-white appearance-none border-none text-black font-bold font-noto-sans uppercase border-gray-200 rounded w-full py-2 px-4 text-gray-700"
        >
          {filterOptions.map((option) => (
            <option key={option.filter} value={option.filter}>
              {option.name}
            </option>
          ))}
        </select>
      </div>

      <div className="p-3">
        <div className="h-[16] w-['41rem'] overflow-x-auto">
          <div
            className="h-['13rem'] flex"
            // style={{
            //   transform: `translateX(-${
            //     filterOptions.findIndex(
            //       (option) => option.filter === selectedFilter
            //     ) * 100
            //   }%)`,
            // }}
          >
            {imageUrl !== "" &&
              imageDescription !== "" &&
              filterOptions.map((option) => (
                <img
                  key={option.filter}
                  src={imageUrl}
                  alt={imageDescription}
                  style={{
                    filter: option.filter,
                    border:
                      option.filter === selectedFilter
                        ? "4px solid blue"
                        : "none",
                    width: "107px",
                    height: "107px",
                  }}
                  onClick={() => setSelectedFilter(option.filter)}
                  className="mx-2 cursor-pointer"
                />
              ))}
          </div>
        </div>
      </div>

      <div className="p-3 text-center">
        <button
          className="w-['60%'] bg-black hover:bg-indigo-700 text-white font-medium py-4 px-20 rounded focus:outline-none focus:shadow-outline"
          type="submit"
        >
          Post Now!
        </button>
      </div>
    </form>
  );
};

export default NewPost;
