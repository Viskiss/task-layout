import StyledNavigation from "./Navigation.styles";

import logo from "./WD.png"

const Navigation = (props) => {
  return (
    <StyledNavigation>
      <img className="navigation__logo" src={logo} alt="" />
      <nav>
        <a className="navigation__logo-a" href="">
          ГЛАВНАЯ
        </a>
        <a className="navigation__logo-a" href="">
          ОБ АВТОРЕ
        </a>
        <a className="navigation__logo-a" href="">
          РАБОТЫ
        </a>
        <a className="navigation__logo-a" href="">
          ПРОЦЕСС
        </a>
        <a className="navigation__logo-a" href="">
          КОНТАКТЫ
        </a>
      </nav>
    </StyledNavigation>
  );
};

export default Navigation;
