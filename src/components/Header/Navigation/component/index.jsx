

const Item = (props) => {
  return (
    <>
      <a className="navigation__logo-a" href={`/${props.title}`.toLowerCase()}>
        {props.title}
      </a>
    </>
  );
};

export default Item;
