import StyledVideo from "./Video.styles";

import video from "../../images/image.png";
import { TextContent } from "../TextContent";

const Video = () => {
  return (
    <StyledVideo>
      <TextContent title="Как я работаю" styled="video__info" />
      <div className="video">
        <button className="video__button">Play</button>
        <img className="video__image" src={video} alt="video" />
      </div>
    </StyledVideo>
  );
};

export default Video;
