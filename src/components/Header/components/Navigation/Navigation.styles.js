import styled from "styled-components";

export default styled.section`
  height: 60px;
  display: flex;
  align-items: center;
  padding-top: 57px;

  .navigation__logo {
    padding-right: 398px;
    object-fit: cover;
    height: max-content;
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
  }

  .navigation__logo-a:hover {
    text-decoration: underline 2px #34547a;
  }

  @media (max-width: 1190px) {
    justify-content: center;

    .navigation__logo {
      padding-right: 250px;
    }

    .navigation__logo-a {
      padding-right: 30px;
    }
  }

  @media (max-width: 1024px) {
    padding: 22px 0 22px 0;

    .navigation__logo {
      margin-left: 20px;
    }

    .navigation__logo-a {
      display: none;
    }
  }
`;
