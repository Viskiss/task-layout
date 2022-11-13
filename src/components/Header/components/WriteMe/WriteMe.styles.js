import styled from "styled-components";

export default styled.section`
  display: flex;
  padding-top: 140px;
  max-width: 1000px;
  padding-bottom: 146px;
  margin: auto;

  @media (max-width: 768px) {
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
  }

  @media (max-width: 1024px) {
    align-items: center;
    margin: 0;
  }

  .write__image {
    padding-right: 140px;

    @media (max-width: 1024px) {
      padding-right: 40px;
    }

    @media (max-width: 768px) {
      margin-bottom: 50px;
      padding: 0;

      .write__image-image {
        height: 195px;
      }
    }
  }

  .write__header {
    font-family: "Roboto";
    font-style: normal;
    font-weight: 500;
    font-size: 48px;
    line-height: 79px;
    margin-bottom: 20px;
    margin-top: 0px;

    @media (max-width: 768px) {
      font-size: 36px;
      line-height: 100%;
      color: #000000;
      margin-bottom: 44px;
    }
  }

  .text-text-block {
    margin-bottom: 60px;
  }
`;
