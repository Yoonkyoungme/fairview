import React from "react";

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

const TopRatedSearch = () => {
  return (
    <StyledSearchContainer>
      <StyledTitle>우수 선발 가게 검색</StyledTitle>
      <StyledSearchWrapper>
        <StyledInput
          type="text"
          placeholder="'식당 이름_지역' 형식으로 입력해주세요."
        />
        <StyledButton>
          <SearchIcon />
        </StyledButton>
      </StyledSearchWrapper>
    </StyledSearchContainer>
  );
};

export default TopRatedSearch;
