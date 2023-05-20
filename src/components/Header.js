import React from "react";
import { useNavigate } from "react-router-dom";

// style
import styled from "styled-components";

// icons
import RateReviewIcon from "@mui/icons-material/RateReview";

const Header = () => {
  const navigate = useNavigate();

  const handleMainClick = () => {
    navigate("/");
  };

  const handleSearchClick = () => {
    navigate("/search");
  };

  const handleTopRatedClick = () => {
    navigate("/top-rated-shops");
  };

  return (
    <HeaderContainer>
      <div className="left-section">
        <RateReviewIcon onClick={handleMainClick} />
        <span className="title" onClick={handleMainClick}>
          sentimental
        </span>
      </div>
      <div className="right-section">
        <div onClick={handleSearchClick}>가게 검색</div>
        <div onClick={handleTopRatedClick}>우수 선발 가게 검색</div>
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
