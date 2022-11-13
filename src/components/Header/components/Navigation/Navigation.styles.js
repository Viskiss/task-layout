import styled from "styled-components";

export default styled.section`
  height: 60px;
  display: flex;
  align-items: center;
  padding-top: 57px;

  @media (max-width: 1135px) {
    justify-content: center;
  }

  @media (max-width: 768px) {
    padding: 22px 0 22px 0;
  }

  .navigation__logo {
    padding-right: 398px;
    object-fit: cover;
    height: max-content;

    @media (max-width: 1135px) {
      padding-right: 150px;
    }

    @media (max-width: 768px) {
      margin-left: 20px;
    }
  }

  .navigation__logo-a {
    text-decoration: none;
    font-family: "Roboto";
    font-weight: 400;
    font-size: 16px;
    line-height: 26px;
    letter-spacing: 0.1em;
    color: #000000;
    padding-right: 42px;

    @media (max-width: 768px) {
      display: none;
    }
  }

  @media (max-width: 1135px) {
    .navigation__logo-a:not(last) {
      padding-right: 15px;
    }
  }

  .navigation__logo-a:hover {
    text-decoration: underline 2px #34547a;
  }

  @media (max-width: 768px) {
    .navigation__logo-a {
      display: none;
    }
  }
`;
