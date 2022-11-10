const Item = (props) => {
  return (
    <div className="projects">
    <img className="projects__image-viev" src="/images/projects/viev.png" alt="viev" />
      <img className="projects__image" src={props.src} alt="pictures" />
    </div>
  );
};

export default Item;
