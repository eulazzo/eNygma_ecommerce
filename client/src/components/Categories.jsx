import styled from "styled-components";
import { categories } from "../dummyData";
import { CategoryItem } from "./CategoryItem";

const Container = styled.div`
  display: flex;
  padding: 20px;
  justify-content: space-between;
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
