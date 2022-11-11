import styled from "styled-components";

export default styled.section`
  display: flex;
  background: #34547a;
  
  @media (max-width: 1279px) {
    height: 477px;
    flex-direction: column;
    flex-wrap: wrap;

    .work__item {
      display: flex;
      justify-content: center;
      height: 50px;
      margin-top: 75px;
    }

    .work__item-image {
      margin-right: 20px;
    }

    .work__item-span {
      font-family: "Roboto";
      font-style: normal;
      font-weight: 500;
      font-size: 21px;
      line-height: 25px;
      color: #ffffff;
    }

    .work__item-p {
      margin-top: 5px;
      font-family: "Roboto";
      font-style: normal;
      font-weight: 400;
      font-size: 16px;
      line-height: 26px;

      color: #ffffff;
      font-family: "Roboto";
      font-style: normal;
      font-weight: 400;
      font-size: 16px;
      line-height: 26px;

      color: #ffffff;
    }
  }

  @media (min-width: 1280px) {
    height: 250px;
    justify-content: center;

    .work__item {
      display: flex;
      height: 50px;
      margin-top: 100px;
    }

    .work__item:not(last) {
      margin-right: 50px;
    }

    .work__item-image {
      margin-right: 20px;
    }

    .work__item-span {
      font-family: "Roboto";
      font-style: normal;
      font-weight: 500;
      font-size: 21px;
      line-height: 25px;
      color: #ffffff;
    }

    .work__item-p {
      margin-top: 5px;
      font-family: "Roboto";
      font-style: normal;
      font-weight: 400;
      font-size: 16px;
      line-height: 26px;

      color: #ffffff;
      font-family: "Roboto";
      font-style: normal;
      font-weight: 400;
      font-size: 16px;
      line-height: 26px;

      color: #ffffff;
    }
  }
`;
