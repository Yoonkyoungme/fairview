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

const DeliverySearch = () => {
  return (
    <StyledSearchContainer>
      <StyledTitle>배달 매장 검색</StyledTitle>
      <StyledSearchWrapper>
        <StyledInput type="text" placeholder="배달 시킬 식당을 입력해주세요." />
        <StyledButton>
          <SearchIcon />
        </StyledButton>
      </StyledSearchWrapper>
    </StyledSearchContainer>
  );
};

export default DeliverySearch;
