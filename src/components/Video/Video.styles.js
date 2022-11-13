import styled from "styled-components";

import playbtn from "../../images/play-button.svg";

export default styled.section`
  display: flex;
  align-items: center;
  flex-direction: column;
  background: #eeeff1;

  .video {
    display: flex;
    justify-content: center;
    position: relative;
    align-items: center;
  }

  .video__button {
    position: absolute;
    background-color: transparent;
    border: none;
    background-image: url(${playbtn});
    width: 100px;
    height: 100px;
    bottom: 50%;
    font-size: 0;
    color: transparent;
    cursor: pointer;

    @media (max-width: 800px) {
      transform: scale(0.5);
    }
  }

  .video__info {
    width: 540px;
    text-align: center;

    @media (max-width: 800px) {
      width: 339px;
    }
  }

  .video__image {
    width: 58%;
    object-fit: cover;
    height: max-content;
    padding-bottom: 100px;

    @media (max-width: 800px) {
      .video__image {
        width: 339px;
      }
    }
  }
`;
