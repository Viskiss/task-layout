import StyledAboutMe from "./AboutMe.styles";

const AboutMe = () => {
  return (
    <StyledAboutMe>
      <div className="about-me__container">
        <h1 className="about-me__container-header">Обо мне</h1>
        <p className="about-me__container-text">
          Lorem Ipsum - это текст-"рыба", часто используемый в печати и
          вэб-дизайне. Lorem Ipsum является стандартной "рыбой" для текстов на
          латинице с начала XVI века.
        </p>
      </div>
    </StyledAboutMe>
  );
};

export default AboutMe;
