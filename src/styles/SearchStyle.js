import styled from "styled-components";

export const StyledSearchContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
`;

export const StyledTitle = styled.div`
  font-size: 2.3rem;
  font-weight: bold;
  color: #260077;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.2);
  margin-bottom: 3%;

  @media (max-width: 768px) {
    margin-bottom: 10%;
    font-size: 2em;
  }
`;

export const StyledSearchWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 80%;
`;

export const StyledInput = styled.input`
  margin-right: 10px;
  padding: 10px;
  border-radius: 8px;
  width: 35%;
  height: 50px;
  text-align: center;
  border: none;

  @media (max-width: 768px) {
    width: 80%;
    height: 40px;
  }
`;

export const StyledButton = styled.button`
  padding: 5px 10px;
  border-radius: 8px;
  height: 50px;
  background-color: white;
  border: none;
  outline: none;

  @media (max-width: 768px) {
    height: 40px;
  }
`;
