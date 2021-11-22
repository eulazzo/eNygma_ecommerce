import styled from "styled-components";
import { ArrowLeftOutlined, ArrowRightOutlined } from "@material-ui/icons";
import { sliderItems } from "../dummyData";
import { useState } from "react";
import { mobile } from "../responsive";

const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  position: relative;
  overflow: hidden;
  ${mobile({ display: "none" })}

`;

const Arrow = styled.div`
  width: 50px;
  height: 50px;
  background-color: #fff7f7;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: 0;
  bottom: 0;
  margin: auto;
  left: ${(props) => props.direction === "left" && "10px"};
  right: ${(props) => props.direction === "right" && "10px"};
  cursor: pointer;
  z-index: 2;
  opacity: 0.5;
`;

const Wrapper = styled.div`
  height: 100%;
  display: flex;
  transition: all 1.5s ease;
  align-items: center;
  transform: translateX(${(props) => props.slideIndex * -100}vw);
`;

const Slide = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  background-color: #${(props) => props.bgColor};
`;

const ImgContainer = styled.div`
  flex: 1;
  height: 100%;
`;

const Image = styled.img`
  height: 80%;
`;

const InfoContainer = styled.div`
  flex: 1;
  padding: 50px;
`;
const Title = styled.h1`
  font-size: 70px;
`;
const Description = styled.p`
  margin: 50px 0;
  font-size: 20px;
  font-weight: 500;
  letter-spacing: 3px;
`;
const Button = styled.button`
  padding: 10px;
  font-size: 20px;
  outline: none;
  background-color: transparent;
  cursor: pointer;
`;

export const Slider = () => {
  const [slideIndex, setSlideIndex] = useState(0);

  const changeSlideHandler = (direction) => {
    direction === "left"
      ? setSlideIndex(slideIndex > 0 ? slideIndex - 1 : 2)
      : setSlideIndex(slideIndex < 2 ? slideIndex + 1 : 0);
  };

  return (
    <Container>
      <Arrow direction="left" onClick={() => changeSlideHandler("left")}>
        <ArrowLeftOutlined />
      </Arrow>
      <Wrapper slideIndex={slideIndex}>
        {sliderItems.map((slider) => (
          <Slide bgColor={slider.bg}>
            <ImgContainer>
              <Image src={slider.img} />
            </ImgContainer>
            <InfoContainer>
              <Title>{slider.title}</Title>
              <Description>{slider.desc}</Description>
              <Button>SHOW NOW</Button>
            </InfoContainer>
          </Slide>
        ))}
      </Wrapper>

      <Arrow direction="right" onClick={() => changeSlideHandler("right")}>
        <ArrowRightOutlined />
      </Arrow>
    </Container>
  );
};
