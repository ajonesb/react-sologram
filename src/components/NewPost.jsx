import React, { useState, useRef } from "react";
import { useTranslation } from "react-i18next";

const NewPost = ({ handleNewPost }) => {
  const [imageUrl, setImageUrl] = useState("");
  const [imageDescription, setImageDescription] = useState("");
  const [selectedFilter, setSelectedFilter] = useState("none");
  const [confirmation, setConfirmation] = useState("");
  const [loading, setLoading] = useState(false);
  const imagePreviewRef = useRef();
  const { t } = useTranslation();

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (imageUrl === "" || imageDescription === "") {
      alert("Both Image URL and Title are required!");
    } else {
      setLoading(true); // Set loading to true when the form is submitted
      try {
        await handleNewPost(
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
        setConfirmation(
          "Your post has been submitted! Please refresh to view the post."
        );
      } catch (error) {
        console.error("Error submitting post:", error);
      } finally {
        setLoading(false); // Set loading back to false after the post request is completed
      }
    }
  };

  const handleImageUrlChange = (event) => {
    setImageUrl(event.target.value);
    imagePreviewRef.current.style.backgroundImage = `url(${event.target.value})`;
    imagePreviewRef.current.style.filter = selectedFilter;
  };

  const filterOptions = [
    { name: t("filter-none"), filter: "none" },
    { name: t("filter-grayscale"), filter: "grayscale(100%)" },
    { name: t("filter-sepia"), filter: "sepia(100%)" },
    { name: t("filter-contrast"), filter: "contrast(150%)" },
    { name: t("filter-blur"), filter: "blur(5px)" },
    { name: t("filter-invert"), filter: "invert(100%)" },
    { name: t("filter-saturate"), filter: "saturate(8)" },
  ];

  console.log(t("post-button-label"));

  return (
    <form onSubmit={handleSubmit} className="mt-[106px] md:mt-[55px] max-w-2xl m-auto">
      {loading && (
        <div className="p-3 text-center">
          <p className="text-indigo-500 font-medium">
            {t("processing-message")}
          </p>
        </div>
      )}
      {confirmation && (
        <div className="mt-[100px] md:mt-[0px] p-3 text-center">
          <p className="text-emerald-600 font-medium text-md font-noto-sans font-extrabold">
            {t("confirmation-message")}
          </p>
        </div>
      )}
      <div className="p-1">
        <label
          className="block text-gray-400 text-sm text-center font-noto-sans font-extrabold mb-2"
          htmlFor="image-url"
        >
          {t("image-url-label")}
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
                style={{ filter: selectedFilter }}
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
          {t("image-description-label")}
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
        >
          {t("filter-select-label")}
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
                  filter={option.filter}
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
          {t("post-button-label")}
        </button>
      </div>
    </form>
  );
};

export default NewPost;
