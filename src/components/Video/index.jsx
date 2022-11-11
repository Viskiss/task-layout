import StyledVideo from "./Video.styles";

import video from "./image.png"


const Video = () => {
  return (
    <StyledVideo>
      <div className="video__info">
        <h1 className="header-text_block">
          Как я работаю
        </h1>

        <p className="text-text-block">
          Lorem Ipsum - это текст-"рыба", часто используемый в печати и
          вэб-дизайне. Lorem Ipsum является стандартной "рыбой" для текстов на
          латинице с начала XVI века.
        </p>
      </div>
      <div className="video" >
        <button className="video__button">Play</button>
      <img
        className="video__image"
        src={video}
        alt="video"
      />
      </div>

    </StyledVideo>
  );
};

export default Video;
