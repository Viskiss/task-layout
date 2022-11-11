import eyeMask from "./view.png"

const Item = (props) => {
  return (
    <>
    <div className="projects">
    <img className="projects__image-viev" src={eyeMask} alt="viev" />
      <img className="projects__image" src={props.src} alt="pictures" />
    </div>
    </>
    
  );
};

export default Item;
