import StyledProjects from "./Projects.styles";

import Item from "./component/Item";
import pictureNote from "../../images/Rectangle 7.png";
import pictureWork from "../../images/Rectangle 7.7.png";

const Projects = () => {
  return (
    <StyledProjects>
      {ITEMS_SRC.map((item, idx) => (
        <Item key={idx} src={item.src} />
      ))}
    </StyledProjects>
  );
};

const ITEMS_SRC = [
  { src: `${pictureNote}` },
  { src: `${pictureWork}` },
  { src: `${pictureNote}` },
  { src: `${pictureWork}` },
  { src: `${pictureNote}` },
  { src: `${pictureWork}` },
  { src: `${pictureNote}` },
  { src: `${pictureWork}` },
];

export default Projects;
