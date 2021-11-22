import styled from "styled-components";
import { Header } from "../components/Header";
import { Announcement } from "../components/Announcement";
import { Footer } from "../components/Footer";
import { Add, Remove } from "@material-ui/icons";

const Container = styled.div``;

const Wrapper = styled.div`
  padding: 20px;
`;

const Title = styled.h1`
  font-weight: 300;
  text-align: center;
`;

const Top = styled.div`
  display: flex;
  align-items: center;
  padding: 20px;
  justify-content: space-between;
`;

const TopBottom = styled.button`
  padding: 10px;
  font-weight: 600;
  cursor: pointer;
  border: ${(props) => props.type === "filled" && "none"};
  background-color: ${(props) =>
    props.type === "filled" ? "black" : "transparent"};
  color: ${(props) => props.type === "filled" && "white"};
`;
const TopTexts = styled.div``;
const Bottom = styled.div`
  display: flex;
  justify-content: space-between;
`;
const TopText = styled.span`
  text-decoration: underline;
  cursor: pointer;
  margin: 0 10px;
`;

const Info = styled.div`
  flex: 3;
`;
 

const Product = styled.div`
  display: flex;
  justify-content: space-between;
`;
const ProductDetail = styled.div`
  flex: 2;
  display: flex;
`;
const Image = styled.img`
  width: 200px;
`;
const Details = styled.div`
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
`;
const ProductName = styled.span``;
const ProductId = styled.span``;
const PriceDetail = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
const ProductColor = styled.div`
  width: 25px;
  height: 25px;
  border-radius: 50%;
  background-color: ${(props) => props.color};
`;
const ProductSize = styled.span``;

const ProductAmountContainer = styled.div`
  display: flex;
  margin-bottom: 20px;
  align-items: center;
`;
const ProductAmount = styled.div`
  font-size: 24px;
  margin: 5px;
`;
const ProductPrice = styled.div`
  font-size: 30px;
  font-weight: 200;
`;

const Hr = styled.hr`
  background-color: #eee;
  border: none;
  height: 2px;
`;

const Sumary = styled.div`
  flex: 1;
  border:0.5px solid lightgray;
  border-radius: 10px;
  padding:20px;
  height: 50vh;
`;

const SummaryTitle = styled.h1`
  font-weight:200;
`;
const SummaryItem = styled.div`
  margin:30px 0;
  display: flex;
  justify-content: space-between;
  font-weight:${props=>props.type==="total" && "500"};
  font-size:${props=>props.type==="total" && "24px"};
`;
const SummaryItemText = styled.span``;
const SummaryItemPrice = styled.span  ``;
const SummaryButton = styled.button`
  width: 100%;
  padding:10px;
  background:#000;
  color:#fff;
  font-weight:600
`;

export const Cart = () => {
  return (
    <Container>
      <Header />
      <Announcement />
      <Wrapper>
        <Title>YOUR BAG</Title>
        <Top>
          <TopBottom>CONTINUE SHOPPING</TopBottom>
          <TopTexts>
            <TopText>Shopping Bag(2)</TopText>
            <TopText>Your Whishlist(0)</TopText>
          </TopTexts>
          <TopBottom type="filled">CHECKOUT NOW</TopBottom>
        </Top>
        <Bottom>
          <Info>
            <Product>
              <ProductDetail>
                <Image src="https://m.media-amazon.com/images/I/41IRRKXhFUL.jpg" />
                <Details>
                  <ProductName>
                    {" "}
                    <b>Product:</b> Philz Thunder Shoes
                  </ProductName>
                  <ProductId>
                    {" "}
                    <b>ID:</b> 453453655556000
                  </ProductId>

                  <ProductColor color="black" />
                  <ProductSize>
                    <b>Size:</b> 27.6
                  </ProductSize>
                </Details>
              </ProductDetail>
              <PriceDetail>
                <ProductAmountContainer>
                  <Add style={{ cursor: "pointer" }} />
                  <ProductAmount>2</ProductAmount>
                  <Remove style={{ cursor: "pointer" }} />
                </ProductAmountContainer>
                <ProductPrice>$ 300</ProductPrice>
              </PriceDetail>
            </Product>
            <Hr />
            <Product>
              <ProductDetail>
                <Image src="https://www.footshop.eu/blog/wp-content/uploads/2020/01/17.jpg" />
                <Details>
                  <ProductName>
                    <b>Product:</b> Jordan XLa Shoes
                  </ProductName>
                  <ProductId>
                    <b>ID:</b> 000655556354354
                  </ProductId>

                  <ProductColor color="gray" />
                  <ProductSize>
                    <b>Size:</b> 28
                  </ProductSize>
                </Details>
              </ProductDetail>
              <PriceDetail>
                <ProductAmountContainer>
                  <Add style={{ cursor: "pointer" }} />
                  <ProductAmount>2</ProductAmount>
                  <Remove style={{ cursor: "pointer" }} />
                </ProductAmountContainer>
                <ProductPrice>$ 1400.00</ProductPrice>
              </PriceDetail>
            </Product>
          </Info>
          <Sumary>
            <SummaryTitle>ORDER SUMMARY</SummaryTitle>
            <SummaryItem>
              <SummaryItemText>Subtotal</SummaryItemText>
              <SummaryItemPrice>$ 1700.00</SummaryItemPrice>
            </SummaryItem>
            <SummaryItem>
              <SummaryItemText>Estimated Shipping</SummaryItemText>
              <SummaryItemPrice>$ 5.3</SummaryItemPrice>
            </SummaryItem>

            <SummaryItem>
              <SummaryItemText>Shipping Discount</SummaryItemText>
              <SummaryItemPrice>$ -5.3</SummaryItemPrice>
            </SummaryItem>
            <SummaryItem type="total">
              <SummaryItemText type="total">Total</SummaryItemText>
              <SummaryItemPrice>$ 1700.00</SummaryItemPrice>
            </SummaryItem>
            <SummaryButton>CHECKOUT NOW</SummaryButton>
          </Sumary>
        </Bottom>
      </Wrapper>
      <Footer />
    </Container>
  );
};