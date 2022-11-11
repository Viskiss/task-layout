import StyledHeader from "./Header.styles";

import Navigation from "./components/Navigation";
import WriteMe from "./components/WriteMe";

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
