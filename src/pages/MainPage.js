import React from "react";
import styled from "styled-components";

const MainPage = () => {
  return (
    <MainPageContainer>
      <Title>FAIRVIEW</Title>
      <Subtitle>
        리뷰의 모든 것을
        <br />
        새로운 시각으로 보다
      </Subtitle>
      <Description>
        감성사전을 활용한 감정분석을 통해 리뷰를 재평가 하고 분석된 데이터들을
        쉽고 명확하게 보여줍니다.
      </Description>
    </MainPageContainer>
  );
};

const MainPageContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  height: 100vh;
`;

const Title = styled.div`
  font-size: 4rem;
  font-weight: bold;
  color: #260077;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.2);
  margin-bottom: 3%;

  @media (max-width: 768px) {
    margin-bottom: 10%;
    font-size: 2.5rem;
  }
`;

const Subtitle = styled.div`
  font-size: 1.8rem;
  line-height: 1.5;
  margin-bottom: 4%;

  @media (max-width: 768px) {
    font-size: 1.25rem;
  }
`;

const Description = styled.div`
  font-size: 1.1rem;
  margin-bottom: 24px;
  line-height: 1.5;

  @media (max-width: 768px) {
    font-size: 0.8rem;
    margin: 0 16px;
    white-space: break-spaces;
    line-height: 1.3;
  }
`;

export default MainPage;
