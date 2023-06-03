import React from "react";
import styled from "styled-components";

const NotFoundPage = () => {
  return (
    <Container>
      <Title>404 Not Found</Title>
      <Message>
        <div>요청하신 페이지를 찾을 수 없습니다.</div>
        <div>입력하신 주소가 정확한지 다시 한번 확인해주세요.</div>
      </Message>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: calc(100vh - 64px);
  padding-top: 160px;

  @media (max-width: 768px) {
    height: calc(100vh - 160px);
  }
`;

const Title = styled.h1`
  font-size: 24px;
  font-weight: bold;
  margin-bottom: 16px;
`;

const Message = styled.div`
  font-size: 16px;
  text-align: center;
  max-width: 400px;

  > div {
    margin-bottom: 8px;
  }
`;

export default NotFoundPage;
