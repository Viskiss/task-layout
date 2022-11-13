import StyledWorkInfo from "./WorkInfo.styles";

import Item from "./component/Item";

const WorkInfo = () => {
  return (
    <StyledWorkInfo>
      {WORK_INFO.map((item, idx) => (
        <Item key={idx} title={item.title} num={item.num} />
      ))}
    </StyledWorkInfo>
  );
};

export const WORK_INFO = [
  { title: "проектов", num: "40+" },
  { title: "проектов", num: "40+" },
  { title: "проектов", num: "40+" },
  { title: "проектов", num: "40+" },
  { title: "проектов", num: "40+" },
  { title: "проектов", num: "40+" },
];

export default WorkInfo;
