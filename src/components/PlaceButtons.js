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
      <Button brandColor="#03C75A" onClick={() => handleClick(url[0])}>
        <div>네이버</div>
      </Button>
      <Button brandColor="#FFCD00" kakao onClick={() => handleClick(url[1])}>
        <div>카카오</div>
      </Button>
      <Button brandColor="#FF6E05" onClick={() => handleClick(url[2])}>
        <div>망고플레이트</div>
      </Button>
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

const Button = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${({ brandColor }) => brandColor};
  color: ${({ kakao }) => (kakao ? "black" : "white")};
  width: 15%;
  height: 70px;
  margin-top: 4%;
  font-weight: 600;
  border-radius: 10px;

  @media (max-width: 768px) {
    width: 30%;
    margin-top: 18%;
  }
`;
