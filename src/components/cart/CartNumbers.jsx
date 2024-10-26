import React from "react";
import { useSelector } from "react-redux";
import { uniqueId } from "lodash";
import Price from "../extra/Price";
function CartNumbers() {
  const { cartNumbers } = useSelector((state) => state.cart);
  const items = [
    { title: "Subtotal", price: cartNumbers.subtotal },
    { title: "Shipping", price: cartNumbers.shipping },
    { title: "Tax", price: cartNumbers.tax },
    { title: "Total (INR)", price: cartNumbers.total },
  ];
  return (
    <div id="cart-numbers">
      <ul className="list-group mb-3">
        {items.map((item) => {
          return (
            <li
              key={uniqueId()}
              className="list-group-item d-flex justify-content-between"
            >
              <span>{item.title} </span>
              <span className="text-muted">
                {<Price value={item.price} decimals={2} />}
              </span>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default CartNumbers;
