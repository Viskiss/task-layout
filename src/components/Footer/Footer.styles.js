import styled from "styled-components";

export default styled.section`
  display: flex;
  align-items: center;
  background: #34547a;

  @media (max-width: 1279px) {
    height: 210px;
    flex-direction: column;

    .footer__image:not(:last-child) {
      margin-right: 20px;
    }

    .footer__info {
      display: flex;
      align-items: center;
      flex-direction: column;
    }

    .footer__info-name {
      font-family: "Roboto";
      font-weight: 500;
      font-size: 21px;
      line-height: 25px;
      color: #ffffff;
      margin-top: 50px;
    }

    .footer__info-date {
      font-family: "Roboto";
      font-weight: 400;
      font-size: 13px;
      line-height: 21px;
      color: #ffffff;
    }
  }

  @media (min-width: 1280px) {
    height: 151px;
    justify-content: space-around;

    .footer__image:not(:last-child) {
      margin-right: 20px;
    }

    .footer__info-name {
      font-family: "Roboto";
      font-weight: 500;
      font-size: 21px;
      line-height: 25px;
      color: #ffffff;
    }

    .footer__info-date {
      font-family: "Roboto";
      font-weight: 400;
      font-size: 13px;
      line-height: 21px;
      color: #ffffff;
    }
  }
`;
