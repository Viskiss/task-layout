import styled from "styled-components";

import playbtn from "./play-button.svg";

export default styled.section`
  display: flex;
  align-items: center;
  flex-direction: column;
  background: #eeeff1;
  
  @media (max-width: 1279px) {
    height: 596px;

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
      transform: scale(0.5);
      width: 100px;
      height: 100px;
      font-size: 0;
      color: transparent;
      cursor: pointer;
    }

    .video__info {
      width: 339px;
      text-align: center;
    }

    .video__image {
      width: 339px;
      object-fit: cover;
      height: max-content;
    }
  }

  @media (min-width: 1280px) {
    height: 1004px;

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
      font-size: 0;
      color: transparent;
      cursor: pointer;
    }

    .video__info {
      width: 540px;
      text-align: center;
    }

    .video__image {
      width: 58%;
      object-fit: cover;
      height: max-content;
    }
  }
`;
