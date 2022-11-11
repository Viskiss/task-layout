import styled from "styled-components";

export default styled.section`
  display: flex;
  padding-top: 140px;
  max-width: 1000px;
  padding-bottom: 146px;

  .write__image {
    padding-right: 130px;
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

  @media (max-width: 1190px) {
    align-items: center;
    margin: 0;

    .write__image {
      padding-right: 80px;
    }
  }

  @media (max-width: 1024px) {
    flex-direction: column;
    align-items: center;
    padding-top: 50px;
    padding-bottom: 50px;

    .write__text {
      display: flex;
      flex-direction: column;
      align-content: center;
      align-items: center;
    }

    .write__image {
      margin-bottom: 50px;
      padding: 0;
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
  }
`;
