import StyledProjects from "./Projects.styles";

import Item from "./component";
import { ITEMS_SRC } from "./items";

const Projects = () => {
  return (
    <StyledProjects>
      {ITEMS_SRC.map((item, idx) => (
        <Item key={idx} src={item.src} />
      ))}
    </StyledProjects>
  );
};

export default Projects;
