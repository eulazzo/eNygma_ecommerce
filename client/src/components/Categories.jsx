import styled from "styled-components";
import { categories } from "../dummyData";
import { CategoryItem } from "./CategoryItem";
import { mobile } from "../responsive";

const Container = styled.div`
  display: flex;
  padding: 20px;
  justify-content: space-between;
  ${mobile({ padding:"0px",flexDirection:"column" })}
`;

export const Categories = () => {
  return (
    <Container>
      {categories.map((category) => (
        <CategoryItem key={category.id} item={category} />
      ))}
    </Container>
  );
};
