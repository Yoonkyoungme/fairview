import React from "react";

// data
import data from "../data/top_rated.json";

// style
import styled from "styled-components";
import Card from "react-bootstrap/Card";

// images
import panda from "../images/search/panda.jpg";
import hongkong from "../images/search/hongkong.jpg";
import hanjung from "../images/search/hanjung.jpg";

const TopRatedShopsResultPage = () => {
  const images = [panda, hongkong, hanjung];

  return (
    <StyledContainer>
      <Title>우수 가게 선발</Title>
      <CardContainer>
        {images.map((place, index) => (
          <StyledCard>
            <CardImage
              variant="top"
              src={images[index]}
              alt={`${data.place_name[index]} 이미지`}
            />
            <CardBody>
              <CardTitle>{data.place_name[index]}</CardTitle>
              <CardItro rating>
                재평가 별점: {data.star_rating[index].toFixed(2)}
              </CardItro>
              <hr />
              <CardItro>위치: {data.location[index]}</CardItro>
            </CardBody>
          </StyledCard>
        ))}
      </CardContainer>
    </StyledContainer>
  );
};

export default TopRatedShopsResultPage;

const StyledContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;

  @media (max-width: 768px) {
    height: auto;
    margin-top: 50%;
  }
`;

const Title = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 0.5rem;
  font-size: 1.2rem;
  font-weight: bold;
  background-color: white;
  padding: 0.5rem 2rem;
  border-radius: 5px;
  box-shadow: 10px 8px 2px 1px rgba(133, 105, 244, 0.4);

  @media (max-width: 768px) {
    margin-bottom: 0.4rem;
  }
`;

const CardContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  gap: 1rem;
  margin-top: 3em;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
    margin-top: 1.5em;
  }
`;

const StyledCard = styled(Card)`
  width: 100%;
  max-width: 360px;
  margin: 10px;
  border-radius: 16px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);

  @media (max-width: 768px) {
    width: 80%;
    margin: 10px 0;
  }
`;

const CardImage = styled(Card.Img)`
  height: 300px;
  object-fit: cover;
  border-top-left-radius: 16px;
  border-top-right-radius: 16px;
`;

const CardBody = styled(Card.Body)`
  margin-top: 16px;
`;

const CardTitle = styled(Card.Title)`
  font-weight: bold;
  font-size: 24px;
  margin-bottom: 4%;

  @media (max-width: 768px) {
    font-size: 18px;
  }
`;

const CardItro = styled(Card.Text)`
  font-size: 14px;
  margin-bottom: 3%;
  font-size: ${({ rating }) => (rating ? "17px" : "14px")};
  font-weight: ${({ rating }) => (rating ? "600" : "400")};

  @media (max-width: 768px) {
    font-size: ${({ rating }) => (rating ? "15px" : "12px")};
  }
`;
