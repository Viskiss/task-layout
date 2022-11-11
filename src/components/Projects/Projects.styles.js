import styled from "styled-components";

export default styled.section`
  display: flex;
  flex-wrap: wrap;
  height: fit-content;
  width: 100%;
  justify-content: center;
  align-content: flex-start;
  padding: 28px 0 28px 0;
  
  @media (max-width: 1279px) {
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
    .projects {
      background: rgba(52, 84, 122, 0.8);
      width: 25%;
      display: flex;
      justify-content: center;
      align-items: center;
      position: relative;
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
