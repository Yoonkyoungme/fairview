import React from "react";

// style
import styled from "styled-components";

// icons
import RateReviewIcon from "@mui/icons-material/RateReview";

const Header = () => {
  return (
    <HeaderContainer>
      <div className="left-section">
        <RateReviewIcon />
        <span className="title">sentimental</span>
      </div>
      <div className="right-section">
        <div>가게 검색</div>
        <div>우수 선발 가게 검색</div>
      </div>
    </HeaderContainer>
  );
};

export default Header;

const HeaderContainer = styled.header`
  background-color: #7353f2;
  color: white;
  padding: 16px 32px;
  display: flex;
  justify-content: space-between;
  align-items: center;

  .left-section {
    display: flex;
    align-items: center;
    cursor: pointer;
  }

  .left-section .title {
    margin-left: 5%;
  }

  .right-section {
    display: flex;
    flex-wrap: wrap;
    gap: 1.6rem;
  }

  .right-section div {
    cursor: pointer;
  }

  .right-section div:hover {
    text-decoration: underline;
  }

  @media (max-width: 768px) {
    flex-direction: column;
    text-align: center;

    .left-section {
      margin-bottom: 1.6rem;
    }

    .right-section {
      flex-direction: column;
      align-items: center;
    }
  }
`;
