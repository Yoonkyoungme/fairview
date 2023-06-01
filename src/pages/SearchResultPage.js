import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";

// data
import data from "../data/hoho_data.json";

// images
import hoho from "../images/hoho.jpg";

// style
import styled from "styled-components";
import Card from "react-bootstrap/Card";

const SearchResultPage = () => {
  const location = useLocation();
  const [result, setResult] = useState(null);

  const starRating = data.star_rating.toFixed(2);

  useEffect(() => {
    if (location.state && location.state.searchResult) {
      setResult(location.state.searchResult);
    }
  }, [location]);

  return (
    <StyledContainer>
      {result && (
        <>
          {result.place_name === "호호식당 대학로점" ? (
            <StyledCard>
              <CardImage
                variant="top"
                src={hoho}
                alt={`${result.place_name} 이미지`}
              />
              <CardBody>
                <CardTitle>{result.place_name}</CardTitle>
                <CardItro>{data.intro}</CardItro>
                <RatingText>재평가 별점: {`${starRating}`} / 100</RatingText>
              </CardBody>
            </StyledCard>
          ) : (
            <StyledCard>
              <CardImage
                variant="top"
                src={result.image_url}
                alt={`${result.place_name} 이미지`}
              />
              <CardBody>
                <CardTitle>{result.place_name}</CardTitle>
                <CardText>위치: {`${result.address_name}`}</CardText>
                <CardText>전화번호: {`${result.phone}`}</CardText>
              </CardBody>
            </StyledCard>
          )}
        </>
      )}
    </StyledContainer>
  );
};

const StyledContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  padding: 8%;

  @media (max-width: 768px) {
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
`;

const StyledCard = styled(Card)`
  width: 100%;
  max-width: 360px;
  margin: 10px;
  border-radius: 16px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);

  @media (max-width: 768px) {
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
  margin-bottom: 8%;
`;

const CardText = styled(Card.Text)`
  margin-bottom: 5%;
`;

const CardItro = styled(Card.Text)`
  font-size: 14px;
  margin-bottom: 5%;
`;

const RatingText = styled.div`
  font-weight: bold;
`;

export default SearchResultPage;
