import styled from "styled-components";

export default styled.section`
  @media (max-width: 1279px) {
    height: 60px;
    display: flex;
    align-items: center;
    padding-top: 22px;

    .navigation__logo {
      margin-left: 20px;
    }

    .navigation__logo-a {
      display: none;
    }
  }

  @media (min-width: 1280px) {
    display: flex;
    height: 60px;
    align-items: center;
    padding-top: 57px;
  

  .navigation__logo {
    margin-right: 398px;
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
  }
    

  
`;
