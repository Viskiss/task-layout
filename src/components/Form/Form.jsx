import StyledForm from "./Form.styles";

import { Button } from "../Button";
import { TextContent } from "../TextContent";

const Form = () => {
  return (
    <StyledForm>
      <div className="container">
        <TextContent title="Хотите веб-сайт?" styled="form__info" />
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
          <Button title="НАПИСАТЬ МНЕ" />
        </div>
      </div>
    </StyledForm>
  );
};

export default Form;
