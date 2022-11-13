import styled from "styled-components";

export default styled.section`
  @media (min-width: 1024px) {
    display: flex;
    flex-wrap: wrap;
    height: fit-content;
    width: 100%;
    justify-content: center;
    align-content: flex-start;
    padding: 28px 0 28px 0;

    .projects {
      background: rgb(52, 84, 122);
      width: 25%;
      display: flex;
      justify-content: center;
      align-items: center;
      position: relative;
      transition: opacity 0.3s;
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
      opacity: 0;
      z-index: 2;
      transition: opacity 0.3s;
    }

    .projects__image-back {
      position: absolute;
      width: 21%;
      height: 21%;
    }
    .projects__image {
      width: 100%;
      height: max-content;
      object-fit: cover;
      backdrop-filter: blur(0px);
    }
    .projects:hover {
      .projects__image {
        opacity: 0.2;
      }

      .projects__image-viev {
        opacity: 1;
      }
    }
  }

  @media (max-width: 1023px) {
    flex-flow: row wrap;
    display: -webkit-box;
    display: -ms-flexbox;
    -ms-box-orient: horizontal;
    display: -moz-box;
    display: -moz-flex;
    display: -webkit-flex;
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
      background: rgb(52, 84, 122);
      width: 50%;
      display: flex;
      justify-content: center;
      align-items: center;
      position: relative;
      transition: opacity 0.3s;

      .projects__image-viev {
        position: absolute;
        width: 21%;
        height: 12%;
        opacity: 0;
        z-index: 2;
        transition: opacity 0.3s;
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
    }

    .projects:hover {
      .projects__image {
        opacity: 0.2;
      }

      .projects__image-viev {
        opacity: 1;
      }
    }
  }
`;
