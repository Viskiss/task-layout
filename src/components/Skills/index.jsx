import StyledSkills from "./Skills.styles";

const Skills = () => {
  return (
    <StyledSkills>
      <div className="skills">
        <div className="skills__skill">
        <div className="skills__header" >
          <h2 className="skills__h1">Мои навыки</h2>
        </div>
        
        <div className="skills__info">
          <p className="skills__info-p">Adobe Photoshop</p>
          <progress className="skills__info-progress" max="100" value="70"> 70% </progress>
        </div>

        <div className="skills__info">
          <p className="skills__info-p">Adobe Photoshop</p>
          <progress className="skills__info-progress" max="100" value="70"> 70% </progress>
        </div>

        <div className="skills__info">
          <p className="skills__info-p">Adobe Photoshop</p>
          <progress className="skills__info-progress" max="100" value="70"> 70% </progress>
        </div>
      </div>
      </div>
      <div className="skills__images" >
        <img className="skills__image" src="/images/skills/photo.png" alt="" />
      </div>
      
    </StyledSkills>
  );
};

export default Skills;
