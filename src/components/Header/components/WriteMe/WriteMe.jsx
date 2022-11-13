import StyledWriteMe from "./WriteMe.styles";

import laptop from "../../../../images/Frame.png";
import { Button } from "../../../Button";

const WriteMe = () => {
  return (
    <StyledWriteMe>
      <div className="write__image">
        <img className="write__image-image" src={laptop} alt="Frame" />
      </div>
      <div className="write__text" >
        <h1 className="write__header">Дизайн и верстка</h1>
        <p className="text-text-block">
          Lorem Ipsum - это текст-"рыба", часто используемый в печати и
          вэб-дизайне. Lorem Ipsum является стандартной "рыбой" для текстов на
          латинице с начала XVI века.
        </p>
        <Button title="НАПИСАТЬ МНЕ"/>
      </div>
    </StyledWriteMe>
  );
};

export default WriteMe;
