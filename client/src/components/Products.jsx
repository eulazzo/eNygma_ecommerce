import styled from "styled-components";
import { Product } from "./Product";
import { popularProducts } from "../dummyData";

const Container = styled.div`
  padding: 20px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`;

export const Products = () => {
  return (
    <Container>
      {popularProducts.map((popularProd) => (
        <Product key={popularProd.id} popularProd={popularProd} />
      ))}
    </Container>
  );
};
