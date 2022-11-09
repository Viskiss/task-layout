import styled from "styled-components";

const InformationHeader = () => {
  
  const Block = styled.div`
    display: flex;
    margin-top: 70px;
  `;

  const Image = styled.div`
    margin-right: 140px;
    margin-left: 90px;
  `;

  const Info = styled.div``;
  const Header = styled.h1`
    font-family: "Roboto";
    font-style: normal;
    font-weight: 500;
    font-size: 48px;
    line-height: 79px;
    margin-bottom: 20px;
  `;

  const Text = styled.p`
    font-family: "Roboto";
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 26px;
    margin-bottom: 60px;
    color: #727272;
  `;

  const Button = styled.button`
    width: 225px;
    height: 65px;
    background: #34547a;
    font-family: "Roboto";
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 26px;
    text-align: center;
    letter-spacing: 0.1em;
    border: none;
    color: white;
  `;

  return (
    <Block>
      <Image>
        <img src="/images/header/Frame.png" alt="Frame" />
      </Image>
      <Info>
        <Header>Дизайн и верстка</Header>
        <Text>
          Lorem Ipsum - это текст-"рыба", часто используемый в печати и
          вэб-дизайне. Lorem Ipsum является стандартной "рыбой" для текстов на
          латинице с начала XVI века.
        </Text>
        <Button>НАПИСАТЬ МНЕ</Button>
      </Info>
    </Block>
  );
};

export default InformationHeader;
