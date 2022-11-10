import StyledVideo from "./Video.styles";

const Video = () => {
  return (
    <StyledVideo>
      <div className="video__info">
        <h1 className="video__info-header">Как я работаю</h1>
        <p className="video__info-text">
          Lorem Ipsum - это текст-"рыба", часто используемый в печати и
          вэб-дизайне. Lorem Ipsum является стандартной "рыбой" для текстов на
          латинице с начала XVI века.
        </p>
      </div>
      <img className="video__image" src="/images/video/image.png" alt="" />
    </StyledVideo>
  );
};

export default Video;
