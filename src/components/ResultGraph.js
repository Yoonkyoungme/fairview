import React from "react";

// style
import styled from "styled-components";

// images
import graph1 from "../images/analysis/positive-negative_graph.jpg";
import graph2 from "../images/analysis/revisit-rate_graph.jpg";

const ResultGraph = () => {
  return (
    <ResultGraphContainer>
      <GraphWrapper>
        <Title>긍정 부정 그래프</Title>
        <GraphImage src={graph1} alt="긍정 부정 그래프" />
      </GraphWrapper>
      <GraphWrapper>
        <Title>재방문율 그래프</Title>
        <GraphImage revisit src={graph2} alt="재방문율 그래프" />
      </GraphWrapper>
    </ResultGraphContainer>
  );
};

export default ResultGraph;

const ResultGraphContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin-top: 8%;

  @media (max-width: 768px) {
    flex-direction: column;
  }

  @media (max-height: 740px) {
    padding-top: 10rem;
  }
`;

const GraphWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 2rem;
`;

const Title = styled.div`
  margin-bottom: 2rem;
  font-size: 1.2rem;
  font-weight: bold;
  background-color: white;
  padding: 0.5rem 2rem;
  border-radius: 5px;
  box-shadow: 10px 8px 2px 1px rgba(133, 105, 244, 0.4);

  @media (max-width: 768px) {
    margin-bottom: 0.8rem;
  }
`;

const GraphImage = styled.img`
  width: ${({ revisit }) => (revisit ? "460px" : "320px")};
  height: 360px;
  max-width: 100%;
  border-radius: 10px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);

  @media (max-width: 768px) {
    width: ${({ revisit }) => (revisit ? "280px" : "280px")};
    height: 280px;
  }
`;
