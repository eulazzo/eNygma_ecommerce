import { Send } from "@material-ui/icons";
import styled from "styled-components";

const Container = styled.div`
  height: 60vh;
  background-color: #fcf5f5;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;
const Tittle = styled.h1`
  font-size: 70px;
  margin-bottom: 20px;
`;
const Description = styled.p`
  font-size: 24px;
  font-weight: 300;
  margin-bottom: 20px;
`;
const InputContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 50%;
  height: 40px;
  background-color: #fff;
  border: 0.7px solid lightgray;
`;
const Input = styled.input`
  border: none;
  outline: none;
  padding: 10px;
  flex: 8;
  margin-left: 20px;
`;
const Button = styled.button`
  border: none;
  height: 100%;
  flex: 1;
  background-color: teal;
  color: #fff;
  cursor: pointer;
`;

export const Newsletter = () => {
  return (
    <Container>
      <Tittle>Newsletter</Tittle>
      <Description>
        Get timely updates from your favorites products.
      </Description>
      <InputContainer>
        <Input placeholder="Your best email" />
        <Button>
          <Send />
        </Button>
      </InputContainer>
    </Container>
  );
};
