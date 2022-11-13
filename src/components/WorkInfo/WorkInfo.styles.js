import styled from "styled-components";

export default styled.section`
  display: flex;
  background: #34547a;
  justify-content: center;

  @media (max-width: 1024px) {
    flex-direction: row;
    flex-wrap: wrap;
  }

  @media (max-width: 768px) {
    align-items: center;
  }

  @media (max-width: 600px) {
    justify-content: space-evenly;
    padding: 25px 0;
  }

  .work__item {
    display: flex;
    height: 50px;
    padding: 100px 0;
    margin-right: 20px;

    @media (max-width: 1170px) {
      margin-right: 20px;
    }

    @media (max-width: 1024px) {
      justify-content: center;
      height: 50px;
      width: 30%;
    }

    @media (max-width: 600px) {
      padding: 45px 0;
    }

    .work__item-image {
      margin-right: 20px;
    }
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
`;
