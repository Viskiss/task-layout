import styled from "styled-components";

export default styled.section`
  display: flex;
  justify-content: center;
  
  @media (max-width: 1279px) {
    flex-direction: column-reverse;
    height: 815px;

    .skills {
      display: flex;
      justify-content: center;
    }

    .skills__skill {
      margin-top: 82px;
    }

    .skills__images {
      display: flex;
      justify-content: center;
    }

    .skills__image {
      width: 339px;
      object-fit: cover;
      height: max-content;
      margin-bottom: 16px;
    }

    .skills__header {
      display: flex;
      justify-content: center;
    }

    .skills__info-progress {
      width: 339px;
    }
  }

  @media (min-width: 1280px) {
    height: 450px;
    margin: 100px 0 100px 0;

    .skills__skill {
      margin-top: 100px;
    }

    .skills__image {
      width: 555px;
      object-fit: cover;
      height: max-content;
    }

    .skills__info {
      margin-right: 150px;
    }

    .skills__info-progress {
      width: 445px;
    }
  }
`;
