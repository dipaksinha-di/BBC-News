import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { newsData } from "../data/data";
import Loader from "../components/Loader";
import ScrollToTop from "../components/ScrollToTop";
import { FaArrowLeftLong } from "react-icons/fa6";

export default function NewsSinglePage() {
  const { id } = useParams();

  const [article, setArticle] = useState(null);

  useEffect(() => {
    const foundArticle = newsData.find((item) => item.id === parseInt(id));
    // console.log("Found Article:", foundArticle); // Debugging line
    setArticle(foundArticle);
  }, [id]);

  if (!article) {
    return <Loader />;
  }

  const {
    title,
    postedDate,
    authorName,
    description,
    relatedTags,
    fullDetailImage,
    category,
  } = article;

  const defaultImage =
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTEdSQyhBXZDi_ZtfZSGxSucdmSqguggGGYA4ojmPZ_JaBfXFTsL50-WhajFwJXllOOzis&usqp=CAU";

  return (
    <>
      <div className="w-11/12 mx-auto max-w-[1100px]">
        <Link to={"/"} className=" relative md:absolute  top-22 left-14 mb-10">
          <FaArrowLeftLong
            size={20}
            className="hover:bg-primary-100 md:bg-primary bg-transparent text-primary md:text-white md:hover:text-primary hover:text-white h-5 md:h-10  w-10 md:rounded-sm rounded-full px-3  sticky top-16  left-4 cursor-pointer border border-primary"
          />
        </Link>
        <div className="max-w-4xl mx-auto my-10 p-5 bg-white shadow-lg rounded-sm">
          <h1 className="text-3xl font-bold mt-5  ">{title}</h1>
          <p className="text-sm my-4 text-dark-500"> 2 hours ago </p>
          <p className="font-bold my-2">{authorName}</p>
          <img
            src={fullDetailImage ? fullDetailImage : defaultImage}
            alt={title}
            className="w-full h-80 object-cover rounded-sm border  border-dark-200"
          />
          {/* <span>Category: {category}</span> */}

          {description.map((desc, index) => (
            <p key={index} className="text-gray-700 text-lg mt-3">
              {desc}
            </p>
          ))}
          <p className="text-gray-700 text-lg  flex flex-wrap gap-2 my-10">
            <span>Related Tags:</span>
            {relatedTags.map((tag) => (
              <p className="px-2 py-1 bg-dark-50 text-dark-600 cursor-pointer">
                {" "}
                {tag}{" "}
              </p>
            ))}
          </p>
        </div>
        <ScrollToTop />
      </div>
    </>
  );
}
