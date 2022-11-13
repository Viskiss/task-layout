import StyledAboutMe from "./AboutMe.styles";

import { TextContent } from "../TextContent";

const AboutMe = () => {
  return (
    <StyledAboutMe>
      <TextContent title="Обо мне" styled="about-me__container" />
    </StyledAboutMe>
  );
};

export default AboutMe;
