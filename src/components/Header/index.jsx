import StyledHeader from "./Header.styles";

import Navigation from "./Navigation";
import WriteMe from "./WriteMe";

const Header = () => {
  return (
    <StyledHeader>
      <div className="header__container">
        <Navigation />
        <WriteMe />
      </div>
    </StyledHeader>
  );
};

export default Header;
