import styled from "styled-components";

export default styled.section`
  padding: 100px 0;
  display: flex;
  align-items: center;
  flex-direction: column;
  background: #eeeff1;

  .container {
    max-width: 540px;
    width: 100%;

    @media (max-width: 768px) {
      max-width: 342px;
    }
  }

  .container__button {
    display: flex;
    justify-content: center;
  }

  .form__info {
    text-align: center;

    .header-text_block {
      margin: 0 0 40px;

      @media (max-width: 768px) {
        margin: 0 0 34px;
      }
    }
  }

  .form__connection {
    margin-bottom: 50px;
  }

  .form__connection-input {
    border: none;
    width: 235px;
    height: 50px;
    margin-bottom: 20px;
    padding: 0 0 0 20px;

    @media (max-width: 768px) {
      width: 94%;
    }
  }

  .form__connection-input:nth-child(1) {
    margin-right: 30px;
  }

  .form__connection-text {
    resize: none;
    border: none;
    width: 520px;
    height: 158px;
    padding: 17px 0 0 20px;

    @media (max-width: 768px) {
      width: 94%;
      height: 175px;
    }
  }
`;
