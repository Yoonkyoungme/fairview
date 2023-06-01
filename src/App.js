import React from "react";
import { Routes, Route, Outlet } from "react-router-dom";

// components
import Header from "./components/Header";

// pages
import MainPage from "./pages/MainPage";
import SearchPage from "./pages/SearchPage";
import SearchResultPage from "./pages/SearchResultPage";
import TopRatedShopsPage from "./pages/TopRatedShopsPage";
import NotFoundPage from "./pages/NotFoundPage";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route index element={<MainPage />} />
        <Route path="/search" element={<SearchPage />} />
        <Route path="/search-result" element={<SearchResultPage />} />
        <Route path="/top-rated-shops" element={<TopRatedShopsPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </>
  );
}

export default App;
