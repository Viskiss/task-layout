import styled from "styled-components";

export default styled.section`
  display: flex;
  justify-content: center;

  @media (max-width: 950px) {
    padding: 0;
  }

  @media (max-width: 768px) {
    flex-direction: column-reverse;
  }

  @media (max-width: 768px) {
    .skills {
      display: flex;
      justify-content: center;
    }
  }

  .skills__h1 {
    padding-top: 100px;
    margin-top: 0;

    @media (max-width: 768px) {
      padding: 0;
    }
  }

  .skills__skill {
    padding: 100px 0;

    @media (max-width: 950px) {
      width: 390px;
      padding: 0 0 60px 0;
    }

    @media (max-width: 768px) {
      margin-top: 82px;
      width: 339px;

      .skills__header {
        display: flex;
        justify-content: center;
      }

      .skills__info-progress {
        width: 339px;
      }
    }
  }

  .skills__progress {
    width: 445px;
    height: 4px;
    background-color: rgba(196, 196, 196, 1);
    margin-bottom: 30px;

    @media (max-width: 1280px) {
      width: 339px;
    }
  }

  .skills__progress-line {
    width: 75%;
    height: 4px;
    background-color: #34547a;
  }

  .skills__images {
    padding: 100px 0;

    @media (max-width: 950px) {
      padding: 0;
    }

    @media (max-width: 768px) {
      display: flex;
      justify-content: center;
    }
  }

  .skills__image {
    width: 555px;
    object-fit: cover;
    height: max-content;

    @media (max-width: 1280px) {
      width: 450px;
    }

    @media (max-width: 950px) {
      width: 300px;
      padding-top: 100px;
    }

    @media (max-width: 768px) {
      width: 339px;
      object-fit: cover;
      height: max-content;
      margin-bottom: 16px;
    }
  }

  .skills__info {
    margin-right: 150px;

    .skills__info-progress {
      width: 445px;

      @media (max-width: 768px) {
        width: 339px;
      }
    }
  }
`;
