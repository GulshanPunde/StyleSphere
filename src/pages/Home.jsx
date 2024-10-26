import React from "react";
import Products from "../products/Products";
import { useSelector } from "react-redux";
function Home() {
  const { productsFromSearch } = useSelector((state) => state.products);
  return (
    <div>
      <Products products={productsFromSearch} />
    </div>
  );
}
export default Home;
