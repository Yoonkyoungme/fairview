import React from "react";
import styled from "styled-components";
// data
import data from "../data/hoho_data.json";

const PlaceButtons = ({ place }) => {
  let url = [
    "https://m.place.naver.com/my/feed/",
    "https://place.map.kakao.com/",
    "https://www.mangoplate.com",
  ];

  if (place === "호호식당 대학로점") {
    url = data.url;
  }
  const handleClick = (url) => {
    window.open(url, "_blank");
  };

  return (
    <Container>
      <ButtonContainer>
        <Button brandColor="#03C75A" onClick={() => handleClick(url[0])}>
          <div>네이버</div>
        </Button>
        {place === "호호식당 대학로점" ? (
          <Rating>별점: {data.ratings[0]}</Rating>
        ) : (
          <></>
        )}
      </ButtonContainer>
      <ButtonContainer>
        <Button brandColor="#FFCD00" kakao onClick={() => handleClick(url[1])}>
          <div>카카오</div>
        </Button>
        {place === "호호식당 대학로점" ? (
          <Rating>별점: {data.ratings[1]}</Rating>
        ) : (
          <></>
        )}
      </ButtonContainer>
      <ButtonContainer>
        <Button brandColor="#FF6E05" onClick={() => handleClick(url[2])}>
          <div>망고플레이트</div>
        </Button>
        {place === "호호식당 대학로점" ? (
          <Rating>별점: {data.ratings[2]}</Rating>
        ) : (
          <></>
        )}
      </ButtonContainer>
    </Container>
  );
};

export default PlaceButtons;

const Container = styled.div`
  display: flex;
  justify-content: space-around;
  width: 60%;

  @media (max-width: 768px) {
    width: 80%;
    justify-content: space-between;
  }
`;

const ButtonContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Button = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${({ brandColor }) => brandColor};
  color: ${({ kakao }) => (kakao ? "black" : "white")};
  width: 140px;
  height: 70px;
  margin-top: 30px;
  font-weight: 600;
  border-radius: 10px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);

  @media (max-width: 768px) {
    width: 100px;
    margin-top: 20px;
  }
`;

const Rating = styled.div`
  margin-top: 10px;
  font-size: 14px;
`;
