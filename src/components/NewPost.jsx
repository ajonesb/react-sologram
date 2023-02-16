import React, { useState, useRef } from "react";

const NewPost = ({ handleNewPost }) => {
  const [imageUrl, setImageUrl] = useState("");
  const [imageDescription, setImageDescription] = useState("");
  const [selectedFilter, setSelectedFilter] = useState("none");
  const [confirmation, setConfirmation] = useState("");

  const imagePreviewRef = useRef();

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
      setImageUrl("");
      setImageDescription("");
      setSelectedFilter("none");
      imagePreviewRef.current.style.backgroundImage = "";
      setConfirmation("Your post has been submitted!");
    }
  };

  // const handleImageUrlChange = (event) => {
  //   setImageUrl(event.target.value);
  //   imagePreviewRef.current.style.backgroundImage = `url(${event.target.value})`;
  // };

  const filterOptions = [
    { name: "None", filter: "none" },
    { name: "Grayscale", filter: "grayscale(100%)" },
    { name: "Sepia", filter: "sepia(100%)" },
    { name: "Contrast", filter: "contrast(150%)" },
  ];

  return (
    <form onSubmit={handleSubmit} className="mt-[55px] max-w-2xl m-auto">
      {confirmation && (
        <div className="p-3 text-center">
          <p className="text-indigo-500 font-medium">{confirmation}</p>
        </div>
      )}
      <div className="p-1">
        <label
          className="block text-gray-400 text-sm text-center font-noto-sans font-extrabold mb-2"
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
      {imageUrl && (
        <div className="p-3">
          <div className="flex items-center justify-center h-[400px] border-x-[15px] border-black border-y-0 w-full">
            <div className="relative h-full w-full">
              <div
                className="absolute top-0 left-0 h-full w-full"
                style={{
                  background: "black",
                }}
              >
                <img
                  src={imageUrl}
                  alt={imageDescription}
                  className="h-full w-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      )}
      <div className="p-0">
        <label
          className="block text-blue-700 text-center text-sm font-noto-sans font-extrabold mb-2"
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

      <div className="p-1">
        <label
          className="block text-gray-400 text-center font-medium font-noto-sans font-bold mb-2"
          htmlFor="filter-select"
        ></label>
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

      <div className="p-0">
        <div className="h-[16] w-['41rem'] overflow-x-auto">
          <div className="h-['13rem'] flex">
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
