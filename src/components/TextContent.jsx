export const TextContent = (props) => {
  return (
    <div className={props.styled}>
      <h1 className="header-text_block">{props.title}</h1>
      <p className="text-text-block">
        Lorem Ipsum - это текст-"рыба", часто используемый в печати и
        вэб-дизайне. Lorem Ipsum является стандартной "рыбой" для текстов на
        латинице с начала XVI века.
      </p>
    </div>
  );
};
