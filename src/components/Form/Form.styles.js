import styled from "styled-components";

export default styled.section`

@media (min-width: 375px) {
  display: flex;
  align-items: center;
  flex-direction: column;
  background: #eeeff1;
  height: 830px;

  .container {
    width: 342px;
  }

  .container__button {
    display: flex;
    margin-top: 50px;
    justify-content: center;

  }

  .form__info {
    padding-top: 100px;
    text-align: center;
  }

  .form__info-header {
    margin: 0 0 50px 0;
    font-family: "Roboto";
    font-style: normal;
    font-weight: 500;
    font-size: 32px;
    line-height: 38px;
  }

  .form__info-text {
    font-family: "Roboto";
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 120%;
    margin-bottom: 57px;
    color: #727272;
    font-size: 16px;
    padding: 0;
  }

  /* .form__connection {
    height: 245px;
  } */

  .form__connection-input {
    border: none;
    width: 322px;
    height: 50px;
    margin-bottom: 20px;
    padding: 0 0 0 20px;
  }


  .form__connection-text {
    border: none;
    width: 322px;
    height: 175px;
    padding: 17px 0 0 20px;
  }
}



@media (min-width: 1280px) {
display: flex;
  align-items: center;
  flex-direction: column;
  background: #eeeff1;
  height: 762px;

  .container {
    width: 540px;
  }

  .container__button {
    display: flex;
    margin-top: 50px;
    justify-content: center;

  }

  .form__info {
    padding-top: 100px;
    text-align: center;
  }

  .form__info-header {
    margin: 0 0 50px 0;

    font-family: "Roboto";
    font-style: normal;
    font-weight: 500;
    font-size: 32px;
    line-height: 38px;
  }

  .form__info-text {
    font-family: "Roboto";
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 26px;
    margin-bottom: 57px;
    color: #727272;
    font-size: 16px;
    padding: 0;
  }

  .form__connection {
    height: 245px;
  }

  .form__connection-input {
    border: none;
    width: 235px;
    height: 50px;
    margin-bottom: 20px;
    padding: 0 0 0 20px;
  }

  .form__connection-input:nth-child(1) {
    margin-right: 30px;
  }

  .form__connection-text {
    border: none;
    width: 520px;
    height: 158px;
    padding: 17px 0 0 20px;
  }
}


  
`;
