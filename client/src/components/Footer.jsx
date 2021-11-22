import {
  Facebook,
  Instagram,
  Pinterest,
  Twitter,
  Room,
  Phone,
  MailOutline,
} from "@material-ui/icons";

import styled from "styled-components";
import { mobile } from "../responsive";

const Container = styled.div`
  display: flex;
  align-items: center;
  ${mobile({ flexDirection: "column" })}
`;
const Left = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  padding: 20px;
`;
const Center = styled.div`
  flex: 1;
  padding: 20px;
  ${mobile({ display: "none" })}
`;
const Right = styled.div`
  flex: 1;
  ${mobile({ backgroundColor: "fff8f8" })}
  padding: 20px;
`;

const Title = styled.h1`
  margin-bottom: 30px;
`;

const Ul = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
  display: flex;
  flex-wrap: wrap;
`;
const Li = styled.li`
  width: 50%;
  margin-bottom: 10px;
`;

const Logo = styled.h1``;
const Description = styled.p`
  margin: 20px 0;
`;
const SocialContainer = styled.div`
  display: flex;
  align-items: center;
`;
const SocialIcon = styled.div`
  width: 40px;
  height: 40px;
  color: #fff;
  border-radius: 50%;
  background: #${(props) => props.color};
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 20px;
  cursor: pointer;
`;
const ContactItem = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 20px;
`;

const Payment = styled.img`
  width: 50%;
`;

export const Footer = () => {
  return (
    <Container>
      <Left>
        <Logo>eNygma</Logo>
        <Description>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Non minus
          velit fuga quam sunt eligendi quisquam nam expedita maiores! Hic omnis
          autem aspernatur rerum quaerat ducimus architecto enim incidunt
          tempore.
        </Description>
        <SocialContainer>
          <SocialIcon color="3b5999">
            <Facebook />
          </SocialIcon>
          <SocialIcon color="e4405f">
            <Instagram />
          </SocialIcon>
          <SocialIcon color="55acee">
            <Twitter />
          </SocialIcon>
          <SocialIcon color="e60023">
            <Pinterest />
          </SocialIcon>
        </SocialContainer>
      </Left>

      <Center>
        <Title>Useful Links</Title>
        <Ul>
          <Li>Home</Li>
          <Li>Cart</Li>
          <Li>Man Fashion</Li>
          <Li>Woman Fashion</Li>
          <Li>Accessories</Li>
          <Li>My Account</Li>
          <Li>Order Tracking</Li>
          <Li>Wishlist</Li>
          <Li>Terms</Li>
        </Ul>
      </Center>
      <Right>
        <Title>Contact</Title>
        <ContactItem>
          <Room style={{ marginRight: "10px " }} /> 633 Dixie Path, South
          Tobinchester 98336
        </ContactItem>
        <ContactItem>
          <Phone style={{ marginRight: "10px " }} />1 434 4343 8
        </ContactItem>
        <ContactItem>
          <MailOutline style={{ marginRight: "10px " }} />
          sac@talkto.com
        </ContactItem>
        <Payment src="https://i.ibb.co/Qfvn4z6/payment.png" />
      </Right>
    </Container>
  );
};
