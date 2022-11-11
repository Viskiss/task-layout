import styled from "styled-components";

export default styled.section`
  background: #eeeff1;
  display: flex;
  justify-content: center;
  height: 700px;

  .header__container {
    width: 1150px;
  }

  @media (max-width: 1190px) {
    text-align: center;
    height: 782px;

    .header__container {
      max-width: 1000px;
    }
  }

  @media (max-width: 1024px) {
    text-align: center;
    height: 782px;

    .header__container {
      width: 322px;
    }
  }
`;
