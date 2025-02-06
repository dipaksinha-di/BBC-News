import React from "react";
import { Link } from "react-router-dom";

const NewsCard = ({ title, thumbnailImage, description, id }) => {
  const defaultImage =
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTEdSQyhBXZDi_ZtfZSGxSucdmSqguggGGYA4ojmPZ_JaBfXFTsL50-WhajFwJXllOOzis&usqp=CAU";

  return (
    <div
      key={id}
      className="bg-white shadow-lg rounded-sm overflow-hidden mx-auto w-full md:w-86"
    >
      <img
        src={thumbnailImage ? thumbnailImage : defaultImage}
        alt={title}
        className="w-full h-42 object-cover"
      />
      <div className="p-4">
        <h2 className="font-bold text-black line-clamp-2">{title}</h2>
        <p className="text-gray-700 text-sm mt-2 line-clamp-3">{description}</p>
        <Link
          to={`/news/${id}`}
          className="text-red-600 font-semibold mt-4 inline-block hover:underline"
        >
          Read more
        </Link>
      </div>
    </div>
  );
};

export default NewsCard;
