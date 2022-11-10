import styled from "styled-components";

export default styled.section`

  @media (max-width: 1279px) {
    background: #eeeff1;
    display: flex;
    justify-content: center;
    text-align: center;
    height: 782px;

    .header__container {
      width: 322px;
    }
  }

  @media (min-width: 1280px) {
    background: #eeeff1;
    display: flex;
    justify-content: center;
    height: 700px;

    .header__container {
      width: 1150px;
    }
  }
`;
