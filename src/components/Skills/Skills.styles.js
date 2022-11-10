import styled from "styled-components";

export default styled.section`
  @media (max-width: 1279px) {
    display: flex;
    justify-content: center;
    flex-direction: column-reverse;
    height: 815px;

    .skills{
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

    .skills__info {
      /* margin-right: 150px; */
    }

    .skills__header {
      display: flex;
      justify-content: center;
    }

    .skills__info-slider {
      height: 4px;
      width: 339px;
      background-color: #ddd;
    }

    .skills__line {
      height: 4px;
      color: white;
      width: 80%;
      background-color: #2196f3;
    }
  }

  @media (min-width: 1280px) {
    display: flex;
    justify-content: center;
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

    .skills__info-slider {
      height: 4px;
      width: 455px;
      background-color: #ddd;
    }

    .skills__line {
      height: 4px;
      color: white;
      width: 80%;
      background-color: #2196f3;
    }
  }
`;
