import React from "react";
import Price from "../components/extra/Price";
import { useNavigate } from "react-router-dom";
import ProductButton from "./ProductButton";
function Product(props) {
  const { product } = props;
  const navigate = useNavigate();
  const handleClick = () => {
    navigate(`/single/${product.id}`);
  };
  const imgPath = "/images/" + product.id + ".jpg";
  return (
    <div className="col">
      <div className="card h-100" id="product">
        <img
          onClick={handleClick}
          src={imgPath}
          title={product.name}
          alt={product.name}
          className="card-img-top pointer"
        />
        <div className="card-body p-4">
          <div className="text-center">
            <h6 className="fw-bolder"> {product.name} </h6>
            <span>{<Price value={product.price} />} </span>
          </div>
        </div>
        <div className="cart-footer p-4 pt-0 border-top-0 bg-transparent">
          <ProductButton product={product} />
        </div>
      </div>
    </div>
  );
}

export default Product;
