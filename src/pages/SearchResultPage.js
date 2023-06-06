import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";

// data
import data from "../data/hoho_data.json";

// images
import hoho from "../images/search/hoho.jpg";

// components
import PlaceButtons from "../components/search/PlaceButtons";
import ResultGraph from "../components/search/ResultGraph";
import ResultWordCloud from "../components/search/ResultWordCloud";

// style
import styled from "styled-components";
import Card from "react-bootstrap/Card";

const SearchResultPage = () => {
  const location = useLocation();
  const [result, setResult] = useState(null);
  const [place, setPlace] = useState("");

  const starRating = data.star_rating.toFixed(2);

  useEffect(() => {
    if (location.state && location.state.searchResult) {
      const data = location.state.searchResult[0];
      setResult(data);
      setPlace(data.title.replace(/<[^>]+>/g, ""));
      console.log("결과", result);
    }
  }, [location]);

  return (
    <>
      <StyledContainer>
        {result && (
          <>
            {place === "호호식당 대학로" ? (
              <>
                <RatingText>재평가 별점: {`${starRating}`}</RatingText>
                <StyledCard>
                  <CardImage variant="top" src={hoho} alt={`${place} 이미지`} />
                  <CardBody>
                    <CardTitle>{place}</CardTitle>
                    <CardItro>{data.intro}</CardItro>
                    <CardItro>
                      Link: <a href={result.link}>{result.link}</a>
                    </CardItro>
                  </CardBody>
                </StyledCard>
              </>
            ) : (
              <StyledCard>
                <CardBody>
                  <CardTitle>{place}</CardTitle>
                  {result.category && (
                    <CardItro>분류: {`${result.category}`}</CardItro>
                  )}
                  <CardItro>위치: {`${result.address}`}</CardItro>
                  {result.link && (
                    <CardItro>
                      Link: <a href={result.link}>{result.link}</a>
                    </CardItro>
                  )}
                </CardBody>
              </StyledCard>
            )}
            <PlaceButtons place={result.place_name} />
          </>
        )}
      </StyledContainer>
      {place === "호호식당 대학로" && (
        <>
          <ResultGraph />
          <ResultWordCloud />
        </>
      )}
    </>
  );
};

const StyledContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;

const RatingText = styled.div`
  color: red;
  font-size: 28px;
  font-weight: bold;
  margin-bottom: 1.5%;
  background-color: white;
  padding: 0.5rem 2rem;
  border-radius: 5px;
  box-shadow: 8px 8px 2px 1px rgba(255, 0, 0, 0.3);
  margin-top: 3%;

  @media (max-width: 768px) {
    font-size: 20px;
    margin-top: 100px;
  }

  @media (max-height: 740px) {
    font-size: 20px;
    margin-top: 250px;
  }
`;

const StyledCard = styled(Card)`
  width: 100%;
  max-width: 360px;
  margin: 10px;
  border-radius: 16px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);

  @media (max-width: 768px) {
    margin: 10px 0;
  }

  @media (max-height: 770px) {
    width: 80%;
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
  margin-bottom: 8%;

  @media (max-width: 768px) {
    font-size: 18px;
  }
`;

const CardText = styled(Card.Text)`
  margin-bottom: 5%;
`;

const CardItro = styled(Card.Text)`
  font-size: 14px;
  margin-bottom: 5%;

  @media (max-width: 768px) {
    font-size: 12px;
  }
`;

export default SearchResultPage;
