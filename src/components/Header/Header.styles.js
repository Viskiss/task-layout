import styled from "styled-components";

export default styled.section`
  background: #eeeff1;
  display: flex;
  justify-content: center;
  
  @media (max-width: 1279px) {
    text-align: center;
    height: 782px;

    .header__container {
      width: 322px;
    }
  }

  @media (min-width: 1280px) {
    height: 700px;

    .header__container {
      width: 1150px;
    }
  }
`;
