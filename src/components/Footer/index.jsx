import StyledFooter from "./Footer.styles";

import vkLogo from "./image.png";

const Footer = () => {
  return (
    <StyledFooter>
      <div className="footer__info">
        <h3 className="footer__info-name">Иванов Иван</h3>
        <p className="footer__info-date">(с) 2018. Все права защищены.</p>
      </div>
      <div className="footer__social">
        <img className="footer__image" src={vkLogo} alt="vk" />
        <img className="footer__image" src={vkLogo} alt="vk" />
        <img className="footer__image" src={vkLogo} alt="vk" />
      </div>
    </StyledFooter>
  );
};

export default Footer;
