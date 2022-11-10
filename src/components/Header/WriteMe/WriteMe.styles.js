import styled from "styled-components";

export default styled.section`

  @media (max-width: 1279px) {
    display: flex;
    flex-direction: column;
    align-items: center;

    .write__image {
      margin: 67px 0 60px 0;
      display: flex;
    }

    .write__image-image {
      height: 195px;
    }

    .write__header {
      font-family: "Roboto";
      font-style: normal;
      font-weight: 500;
      font-size: 36px;
      line-height: 100%;
      color: #000000;
      margin-bottom: 44px;
      margin-top: 0px;
    }

    .write__text {
      font-family: "Roboto";
      font-style: normal;
      font-weight: 400;
      font-size: 16px;
      line-height: 120%;
      color: #727272;
      margin-bottom: 44px;
    }
  }

  @media (min-width: 1280px) {
display: flex;
  margin-top: 140px;

  .write__image {
    margin-right: 140px;
    margin-left: 90px;
    margin-top: 15px;
  }

  .write__header {
    font-family: "Roboto";
    font-style: normal;
    font-weight: 500;
    font-size: 48px;
    line-height: 79px;
    margin-bottom: 20px;
    margin-top: 0px;
  }

  .write__text {
    font-family: "Roboto";
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 26px;
    margin-bottom: 60px;
    color: #727272;
  }
  }

  
`;
