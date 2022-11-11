import doc from "../../../images/project.png";

const Item = (props) => {
  return (
    <div className="work__item">
      <img className="work__item-image" src={doc} alt="" />
      <div>
        <span className="work__item-span">{props.num}</span>
        <p className="work__item-p">{props.title}</p>
      </div>
    </div>
  );
};

export default Item;
