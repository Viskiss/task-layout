import StyledNavigation from "./Navigation.styles";

import logo from "../../../../images/WD.png";

const Navigation = () => {
  return (
    <StyledNavigation>
      <img className="navigation__logo" src={logo} alt="" />
      <nav className="navigation">
        {LINKS.map(({ title }) => (
          <a
            key={title}
            className="navigation__logo-a"
            href={`/${title}`.toLowerCase()}
          >
            {title}
          </a>
        ))}
      </nav>
    </StyledNavigation>
  );
};

const LINKS = [
  { title: "ГЛАВНАЯ" },
  { title: "ОБ АВТОРЕ" },
  { title: "РАБОТЫ" },
  { title: "ПРОЦЕСС" },
  { title: "КОНТАКТЫ" },
];

export default Navigation;
