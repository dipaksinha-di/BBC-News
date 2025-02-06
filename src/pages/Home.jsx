import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { newsData } from "../data/data";
import NewsCard from "../components/NewsCard";
import ScrollToTop from "../components/ScrollToTop";

export default function Home({ category, searchQuery }) {
  const { categoryParam, searchParam } = useParams();
  const [filteredNews, setFilteredNews] = useState(newsData);

  useEffect(() => {
    let filtered = newsData;

    if (categoryParam) {
      filtered = filtered.filter(
        (article) => article.category.toLowerCase() === categoryParam
      );
    }

    if (searchParam) {
      filtered = filtered.filter((article) =>
        article.title.toLowerCase().includes(searchParam.toLowerCase())
      );
    }

    setFilteredNews(filtered);
  }, [categoryParam, searchParam]);

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 w-11/12 max-w-[1200px] mx-auto my-5 space-y-8">
      {filteredNews.map((article) => (
        <NewsCard
          key={article.id}
          id={article.id}
          title={article.title}
          thumbnailImage={article.thumbnailImage}
          description={article.description[0]}
        />
      ))}
      <ScrollToTop/>
    </div>
  );
}
