import styled from "styled-components";

export default styled.footer`
  display: flex;
  align-items: center;
  background: #34547a;
  justify-content: space-around;

  @media (max-width: 768px) {
    flex-direction: column;

    .footer__info {
      display: flex;
      align-items: center;
      flex-direction: column;
    }
  }

  .footer__image:not(:last-child) {
    margin-right: 20px;
  }

  .footer__image {
    @media (max-width: 768px) {
      padding-bottom: 50px;
    }
  }

  .footer__info-name {
    font-family: "Roboto";
    font-weight: 500;
    font-size: 21px;
    line-height: 25px;
    color: #ffffff;
    padding-top: 50px;
    margin-top: 0;
  }

  .footer__info-date {
    font-family: "Roboto";
    font-weight: 400;
    font-size: 13px;
    line-height: 21px;
    color: #ffffff;
    padding-bottom: 50px;
    margin-bottom: 0;

    @media (max-width: 768px) {
      padding-bottom: 0;
      margin:0 0 38px 0;
    }
  }
`;
