import StyledForm from "./Form.styles";

const Form = () => {
  return (
    <StyledForm>
      <div className="container">
        <div className="form__info">
          <h1 className="header-text_block">Хотите веб-сайт?</h1>
          <p className="text-text-block">
            Lorem Ipsum - это текст-"рыба", часто используемый в печати и
            вэб-дизайне. Lorem Ipsum является стандартной "рыбой" для текстов на
            латинице с начала XVI века.
          </p>
        </div>
        <div className="form__connection">
          <input
            className="form__connection-input"
            placeholder="Ваше имя"
            type="text"
          />
          <input
            className="form__connection-input"
            placeholder="Ваш e-mail"
            type="text"
          />
          <textarea
            className="form__connection-text"
            placeholder="Сообщение"
          ></textarea>
        </div>
        <div className="container__button">
          <button className="button">НАПИСАТЬ МНЕ</button>
        </div>
      </div>
    </StyledForm>
  );
};

export default Form;
