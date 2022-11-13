import StyledSkills from "./Skills.styles";

import menPhoto from "../../images/photo.png";

const Skills = () => {
  return (
    <StyledSkills>
      <div className="skills">
        <div className="skills__skill">
          <div className="skills__header">
            <h2 className="skills__h1">Мои навыки</h2>
          </div>

          <div className="skills__info">
            <p className="skills__info-p">Adobe Photoshop</p>
           <div className="skills__progress">
            <div className="skills__progress-line" ></div>
           </div>
          </div>

          <div className="skills__info">
            <p className="skills__info-p">Adobe Photoshop</p>
            <div className="skills__progress">
            <div className="skills__progress-line" ></div>
           </div>
          </div>

          <div className="skills__info">
            <p className="skills__info-p">Adobe Photoshop</p>
            <div className="skills__progress">
            <div className="skills__progress-line" ></div>
           </div>
          </div>
        </div>
      </div>
      <div className="skills__images">
        <img className="skills__image" src={menPhoto} alt="men photo" />
      </div>
    </StyledSkills>
  );
};

export default Skills;
