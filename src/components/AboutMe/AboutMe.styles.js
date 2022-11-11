import styled from "styled-components";

export default styled.section`
  display: flex;
  justify-content: center;

  @media (max-width: 1279px) {
    height: 351px;

    .about-me__container {
      width: 323px;
      text-align: center;
    }
  }

  @media (min-width: 1280px) {
    height: 366px;

    .about-me__container {
      width: 540px;
      text-align: center;
    }
  }
`;
