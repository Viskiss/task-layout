import styled from "styled-components";

export default styled.section`
  @media (max-width: 1279px) {
    height: 351px;
    display: flex;
    justify-content: center;

    .about-me__container {
      width: 323px;
      text-align: center;
    }

    .about-me__container-header {
      margin-top: 91px;
      margin-bottom: 42px;
      font-family: "Roboto";
      font-style: normal;
      font-weight: 500;
      font-size: 32px;
      line-height: 38px;
    }

    .about-me__container-text {
      font-family: "Roboto";
      font-style: normal;
      font-weight: 400;
      font-size: 16px;
      line-height: 120%;
      margin-bottom: 82px;
      color: #727272;
      font-size: 16px;
    }
  }

  @media (min-width: 1280px) {
    height: 366px;
    display: flex;
    justify-content: center;

    .about-me__container {
      width: 540px;
      text-align: center;
    }

    .about-me__container-header {
      margin-top: 120px;
      margin-bottom: 50px;
      font-family: "Roboto";
      font-style: normal;
      font-weight: 500;
      font-size: 32px;
      line-height: 38px;
    }

    .about-me__container-text {
      font-family: "Roboto";
      font-style: normal;
      font-weight: 400;
      font-size: 16px;
      line-height: 26px;
      margin-bottom: 100px;
      color: #727272;
      font-size: 16px;
    }
  }
`;
