import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

// pages
import SearchResultPage from "./SearchResultPage";

// style
import styled from "styled-components";

// icon
import SearchIcon from "@mui/icons-material/Search";

// api
import api from "../services/index";

const SearchPage = () => {
  const navigate = useNavigate();

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
      const response = await api.get(`place/${searchTerm}`);
      const searchData = response.data;
      setSearchResult(searchData);
      // console.log(searchData);
    } catch (error) {
      console.error("검색 중 오류 발생:", error);
    }
  };

  useEffect(() => {
    if (searchResult) {
      navigate(`/search-result`, { state: { searchResult } });
    }
  }, [searchResult, navigate]);

  return (
    <StyledSearchContainer>
      <StyledTitle>FAIRVIEW</StyledTitle>
      <StyledSearchWrapper>
        <StyledInput
          type="text"
          placeholder="검색어를 입력하세요"
          value={searchTerm}
          onChange={handleChange}
          onKeyDown={handleKeyDown}
        />
        <StyledButton onClick={handleSearch}>
          <SearchIcon />
        </StyledButton>
      </StyledSearchWrapper>
      {searchResult && <SearchResultPage searchResult={searchResult} />}
    </StyledSearchContainer>
  );
};

export default SearchPage;

const StyledSearchContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: calc(100vh - 64px);

  @media (max-width: 768px) {
    height: calc(100vh - 160px);
  }
`;

const StyledTitle = styled.div`
  font-size: 3rem;
  font-weight: bold;
  color: #260077;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.2);
  margin-bottom: 2%;

  @media (max-width: 768px) {
    margin-bottom: 7%;
    font-size: 2.5rem;
  }
`;

const StyledSearchWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 80%;
`;

const StyledInput = styled.input`
  margin-right: 10px;
  padding: 10px;
  border-radius: 8px;
  width: 40%;
  height: 40px;

  @media (max-width: 768px) {
    width: 80%;
    height: 40px;
  }
`;

const StyledButton = styled.button`
  padding: 5px 10px;
  border-radius: 8px;
  height: 40px;

  @media (max-width: 768px) {
    height: 40px;
  }
`;
