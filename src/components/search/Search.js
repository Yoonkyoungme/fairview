import React, { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";

// pages
import SearchResultPage from "../../pages/SearchResultPage";

// style
import {
  StyledSearchContainer,
  StyledTitle,
  StyledSearchWrapper,
  StyledInput,
  StyledButton,
} from "../../styles/SearchStyle";

// icon
import SearchIcon from "@mui/icons-material/Search";

// api
import api from "../../services/index";

const Search = () => {
  const navigate = useNavigate();
  const inputRef = useRef(null);

  const [searchTerm, setSearchTerm] = useState("");
  const [searchResult, setSearchResult] = useState("");

  const handleChange = (e) => {
    const value = e.target.value;
    setSearchTerm(value);
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      e.preventDefault();
      handleSearch();
    }
  };

  const handleSearch = async () => {
    try {
      const response = await api.get("/v1/search/local.json", {
        params: {
          query: searchTerm,
        },
      });
      const searchData = response.data.items;
      setSearchResult(searchData);
    } catch (error) {
      console.error("검색 중 오류 발생:", error);
    }
  };

  useEffect(() => {
    if (searchResult) {
      navigate(`/search-result`, { state: { searchResult } });
    }
  }, [searchResult, navigate]);

  useEffect(() => {
    inputRef.current.focus();
  }, []);

  return (
    <StyledSearchContainer>
      <StyledTitle>방문 매장 검색</StyledTitle>
      <StyledSearchWrapper>
        <StyledInput
          type="text"
          placeholder="방문 할 매장을 입력해주세요."
          value={searchTerm}
          onChange={handleChange}
          onKeyDown={handleKeyDown}
          ref={inputRef}
        />
        <StyledButton onClick={handleSearch}>
          <SearchIcon />
        </StyledButton>
      </StyledSearchWrapper>
      {searchResult && <SearchResultPage searchResult={searchResult} />}
    </StyledSearchContainer>
  );
};

export default Search;
