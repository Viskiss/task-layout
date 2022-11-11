import Item from "./component";
import { WORK_INFO } from "./wirkInfo";
import StyledWorkInfo from "./WorkInfo.styles";

const WorkInfo = () => {
  return (
    <StyledWorkInfo>
      {WORK_INFO.map((item, idx) => (
        <Item key={idx} title={item.title} num={item.num} />
      ))}
    </StyledWorkInfo>
  );
};

export default WorkInfo;
