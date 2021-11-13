import styled from "styled-components";

export const ResponseWrapper = styled.div`
  width: 80%;
  min-width: 500px;
  display: flex;
  align-self: stretch;
  height: 100px;
  margin: 16px;
`;

export const ContentWrapper = styled.div`
  display: flex;
  flex: 1;
  position: relative;
`;

export const FrontContent = styled.div`
  background-color: #fff;
  display: flex;
  align-items: center;
  border-radius: 12px;
  padding: 16px;
  height: 100%;
  width: 100%;
  position: absolute;

  .letter {
    font-size: 1.3rem;
    font-weight: bold;
    width: 40px;
    height: 40px;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-right: 16px;
  }

  .value {
    font-size: 1.3rem;
    font-weight: bold;
    color: #1b1b1b;
  }
`;

export const BackContent = styled.div`
  display: flex;
  height: 100%;
  width: 100%;
  position: absolute;

  div {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    border-radius: 12px;
    flex: 1;
  }

  .certain {
    background-color: #2BAA6D;
  }

  .wrong {
    background-color: #E44A4c;
  }

  .certain .value, .wrong .value {
    font-size: 1.5rem;
    color: #FFF;
    font-weight: bold;
  }
`;
