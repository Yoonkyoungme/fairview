import React from "react";

// style
import styled from "styled-components";

// images
import positive from "../../images/analysis/wordcloud_positive.jpg";
import neutral from "../../images/analysis/wordcloud_neutral.jpg";
import negative from "../../images/analysis/wordcloud_negative.jpg";

const ResultWordCloud = () => {
  return (
    <WordCloudContainer>
      <Title>
        워드 클라우드로 보는
        <br /> 리뷰 속 명사들
      </Title>
      <WordCloudBox>
        <WordCloud>
          <Text>긍정</Text>
          <Image src={positive} />
        </WordCloud>

        <WordCloud>
          <Text>중립</Text>
          <Image src={neutral} />
        </WordCloud>

        <WordCloud>
          <Text>부정</Text>
          <Image src={negative} />
        </WordCloud>
      </WordCloudBox>
    </WordCloudContainer>
  );
};

export default ResultWordCloud;

const WordCloudContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  margin-top: 12%;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const Title = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 2rem;
  font-size: 1.2rem;
  font-weight: bold;
  line-height: 1.5rem;
  text-align: center;
  background-color: white;
  padding: 0.5rem 2rem;
  border-radius: 5px;
  box-shadow: 10px 8px 2px 1px rgba(133, 105, 244, 0.4);

  @media (max-width: 768px) {
    margin-bottom: 0.8rem;
  }
`;

const WordCloudBox = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  gap: 1rem;
  margin-top: 4rem;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
    margin-top: 1rem;
  }
`;

const WordCloud = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
`;

const Text = styled.div`
  font-size: 1.2rem;
  font-weight: 500;
  margin-bottom: 10px;
`;

const Image = styled.img`
  width: 300px;
  height: 300px;
  max-width: 100%;
  border-radius: 10px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.3);
  margin-bottom: 100px;

  @media (max-width: 768px) {
    margin-bottom: 60px;
  }
`;
