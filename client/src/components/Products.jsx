import styled from "styled-components";
import { Product } from "./Product";
import { popularProducts } from "../dummyData";
import { useState } from "react";
import { useEffect } from "react";
import { publicRequest } from "../requestMethods";

const Container = styled.div`
  padding: 20px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`;

export const Products = ({ catGory, filters, sortfilter }) => {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);

  useEffect(
    () =>
      (async () => {
        try {
          const { data } = await publicRequest.get(
            catGory ? `/products?category=${catGory}` : `/products`
          );
          setProducts(data);
        } catch (error) {
          console.log(error);
        }
      })(),
    [catGory]
  );

  useEffect(
    () =>
      catGory &&
      setFilteredProducts(
        products.filter((prod) =>
          Object.entries(filters).every(([key, value]) =>
            prod[key].includes(value)
          )
        )
      ),
    [catGory, products, filters]
  );

  useEffect(() => {
    if (sortfilter === "newest") {
      setFilteredProducts((prev) =>
        [...prev].sort((a, b) => a.createdAt - b.createdAt)
      );
    } else if (sortfilter === "asc") {
      setFilteredProducts((prev) =>
        [...prev].sort((a, b) => a.price - b.price)
      );
    } else {
      setFilteredProducts((prev) =>
        [...prev].sort((a, b) => b.price - a.price)
      );
    }
  }, [sortfilter]);

  return (
    <Container>
      {catGory
        ? filteredProducts.map((item) => (
            <Product key={item._id} popularProd={item} />
          ))
        : products
            .slice(0, 8)
            .map((item) => <Product key={item._id} popularProd={item} />)}
    </Container>
  );
};
