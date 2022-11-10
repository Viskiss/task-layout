import StyledNavigation from "./Navigation.styles";

import { LINK_TITLE } from "./links";
import Item from "./component";
import logo from "./WD.png";

const Navigation = () => {

  return (
    <StyledNavigation>
      <img className="navigation__logo" src={logo} alt="" />
      <nav className="navigation">
        {LINK_TITLE.map((item) => (
          <Item key={item.title} title={item.title} />
        ))}
      </nav>
    </StyledNavigation>
  );
};

export default Navigation;
