import React, { useState } from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import Home from "./pages/Home";
import NewsSinglePage from "./pages/NewsSinglePage";
import Header from "./components/Header";
import Footer from "./components/Footer";

function App() {
  const [category, setCategory] = useState("");
  const [searchQuery, setSearchQuery] = useState("");

  return (
    <Router>
      <Header setCategory={setCategory} setSearchQuery={setSearchQuery} />
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
      <Footer/>
    </Router>
  );
}

export default App;
