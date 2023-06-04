import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

// style
import {
  StyledSearchContainer,
  StyledTitle,
  StyledSearchWrapper,
  StyledInput,
  StyledButton,
} from "../styles/SearchStyle";

// icon
import SearchIcon from "@mui/icons-material/Search";

const TopRatedSearchPage = () => {
  const navigate = useNavigate();

  const [searchTerm, setSearchTerm] = useState("");

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

  const handleSearch = () => {
    if (searchTerm === "마라탕_대전 문화점") {
      navigate("/top-rated-shops-result");
    } else {
      alert(
        "우수 선발 가게 결과가 없습니다. 현재 '마라탕_대전 문화점' 결과만 존재합니다."
      );
      setSearchTerm("");
    }
  };

  return (
    <StyledSearchContainer>
      <StyledTitle>우수 선발 가게 검색</StyledTitle>
      <StyledSearchWrapper>
        <StyledInput
          type="text"
          placeholder="'음식_지역' 형식으로 입력해주세요."
          value={searchTerm}
          onChange={handleChange}
          onKeyDown={handleKeyDown}
        />
        <StyledButton onClick={handleSearch}>
          <SearchIcon />
        </StyledButton>
      </StyledSearchWrapper>
    </StyledSearchContainer>
  );
};

export default TopRatedSearchPage;
