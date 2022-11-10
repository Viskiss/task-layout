import styled from "styled-components";

export default styled.section`

@media (max-width: 1279px)  {
  height: 210px;
  display: flex;
  flex-direction: column;
  align-items: center;
  background: #34547a;

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
    font-style: normal;
    font-weight: 500;
    font-size: 21px;
    line-height: 25px;
    color: #ffffff;
    margin-top: 50px
  }

  .footer__info-date {
    font-family: "Roboto";
    font-style: normal;
    font-weight: 400;
    font-size: 13px;
    line-height: 21px;

    color: #ffffff;
  }
}


@media (min-width: 1280px) {
  
  height: 151px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  background: #34547a;

  .footer__image:not(:last-child) {
    margin-right: 20px;
  }

  .footer__info-name {
    font-family: "Roboto";
    font-style: normal;
    font-weight: 500;
    font-size: 21px;
    line-height: 25px;

    color: #ffffff;
  }

  .footer__info-date {
    font-family: "Roboto";
    font-style: normal;
    font-weight: 400;
    font-size: 13px;
    line-height: 21px;

    color: #ffffff;
  }
}
  
`;
