import styled from "styled-components";

export default styled.section`
  display: flex;
  height: fit-content;
  width: 100%;
  justify-content: center;
  align-content: flex-start;
  padding: 28px 0 28px 0;

  @media (max-width: 1279px) {
    flex-flow: row wrap;
    -webkit-flex-flow: row wrap;

    .projects:nth-of-type(1) {
      order: 4;
    }
    .projects:nth-of-type(8) {
      order: 1;
    }

    .projects:nth-of-type(3) {
      order: 7;
    }
    .projects:nth-of-type(7) {
      order: 3;
    }

    .projects:nth-of-type(4) {
      order: 1;
    }
    .projects:nth-of-type(6) {
      order: 4;
    }

    .projects:nth-of-type(2) {
      order: 7;
    }
    .projects:nth-of-type(7) {
      order: 2;
    }

    .projects:nth-of-type(1) {
      order: 4;
    }
    .projects:nth-of-type(4) {
      order: 1;
    }

    .projects {
      background: rgba(52, 84, 122, 0.8);
      width: 50%;
      display: flex;
      justify-content: center;
      align-items: center;
      position: relative;

      .projects__image-viev {
        position: absolute;
        width: 21%;
        height: 12%;
      }
      .projects__image {
        width: 100%;
        height: max-content;
        object-fit: cover;
        position: relative;
        backdrop-filter: blur(0px);
        background-color: rgba(114, 78, 136, 0.6);
        transition: opacity 0.3s;
      }

      .projects__image:hover {
        opacity: 0.2;
      }
    }
  }

  @media (min-width: 1280px) {
    /* display: flex;
      flex-wrap: wrap;
      height: fit-content;
      width: 100%;
      justify-content: center;
      align-content: flex-start;
      padding: 28px 0 28px 0; */

    .projects {
      background: rgba(52, 84, 122, 0.8);
      width: 25%;
      display: flex;
      justify-content: center;
      align-items: center;
      position: relative;
    }

    .projects:nth-of-type(1) {
      order: 2;
    }
    .projects:nth-of-type(2) {
      order: 1;
    }

    .projects:nth-of-type(5) {
      order: 6;
    }
    .projects:nth-of-type(6) {
      order: 5;
    }

    .projects__image-viev {
      position: absolute;
      width: 21%;
      height: 12%;
    }
    .projects__image {
      width: 100%;
      height: max-content;
      object-fit: cover;
      backdrop-filter: blur(0px);
      background-color: rgba(114, 78, 136, 0.6);
    }
    .projects__image:hover {
      opacity: 0.2;
    }
  }
`;
