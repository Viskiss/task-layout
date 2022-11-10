import StyledNavigation from "./Navigation.styles";
import logo from "./WD.png";

const Navigation = () => {
  
  return (
    <StyledNavigation>
      <img className="navigation__logo" src={logo} alt="" />
      <nav className="navigation" >
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
