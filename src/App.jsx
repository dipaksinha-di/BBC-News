import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import NewsSinglePage from "./pages/NewsSinglePage";
import Header from "./components/Header";
import Footer from "./components/Footer";

function App() {
  const [category, setCategory] = useState("");
  const [searchQuery, setSearchQuery] = useState("");

  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <Header setCategory={setCategory} setSearchQuery={setSearchQuery} />
        <div className="flex-grow">
          <Routes>
            <Route
              path="/"
              element={<Home category={category} searchQuery={searchQuery} />}
            />
            <Route
              path="/:categoryParam"
              element={<Home category={category} searchQuery={searchQuery} />}
            />
            <Route
              path="/:searchParam"
              element={<Home category={category} searchQuery={searchQuery} />}
            />
            <Route path="/news/:id" element={<NewsSinglePage />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
