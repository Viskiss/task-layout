import styled from "styled-components";

export default styled.section`

@media (max-width: 1279px)  {
  display: flex;
  align-items: center;
  flex-direction: column;
  background: #eeeff1;
  height: 596px;

  .video__info {
    padding-top: 100px;
    width: 339px;
    text-align: center;
  }

  .video__info-header {
    margin: 0 0 50px 0;
    font-family: "Roboto";
    font-style: normal;
    font-weight: 500;
    font-size: 32px;
    line-height: 38px;
  }

  .video__info-text {
    font-family: "Roboto";
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 26px;
    margin-bottom: 57px;
    color: #727272;
    font-size: 16px;
  }

  .video__image {
    width: 339px;
    object-fit: cover;
    height: max-content;
  }
}

@media (min-width: 1280px) {
  display: flex;
  align-items: center;
  flex-direction: column;
  background: #eeeff1;
  height: 1004px;

  .video__info {
    padding-top: 100px;
    width: 540px;
    text-align: center;
  }

  .video__info-header {
    margin: 0 0 50px 0;

    font-family: "Roboto";
    font-style: normal;
    font-weight: 500;
    font-size: 32px;
    line-height: 38px;
  }

  .video__info-text {
    font-family: "Roboto";
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 26px;
    margin-bottom: 57px;
    color: #727272;
    font-size: 16px;
  }

  .video__image {
    width: 58%;
    object-fit: cover;
    height: max-content;
  }
}
  

  
`;
