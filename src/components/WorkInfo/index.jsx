import StyledWorkInfo from "./WorkInfo.styles";

import Item from "./component/Item";
import { WORK_INFO } from "./wirkInfo";

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
