import StyledFooter from "./Footer.styles";

const Footer = () => {
  return (
    <StyledFooter>
      <div className="footer__info">
        <h3 className="footer__info-name">Иванов Иван</h3>
        <p className="footer__info-date">(с) 2018. Все права защищены.</p>
      </div>
      <div className="footer__social">
        <img className="footer__image" src="/images/footer/image.png" alt="" />
        <img className="footer__image" src="/images/footer/image.png" alt="" />
        <img className="footer__image" src="/images/footer/image.png" alt="" />
      </div>
    </StyledFooter>
  );
};

export default Footer;
