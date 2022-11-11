import StyledProjects from "./Projects.styles";

import Item from "./component";
import { ITEMS_SRC } from "./items";

const Projects = () => {
  return (
    <StyledProjects>
      <div className="project__order">
        {ITEMS_SRC.map((item, idx) => (
          <Item key={idx} src={item.src} />
        ))}
      </div>
    </StyledProjects>
  );
};

export default Projects;
