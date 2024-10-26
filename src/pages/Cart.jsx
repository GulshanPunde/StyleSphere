import React from "react";
import NoComponent from "../components/extra/NoComponent";
import { useSelector } from "react-redux";
import CartItem from "../components/cart/CartItem";
import CartNumbers from "../components/cart/CartNumbers";
import CartBuyButton from "../components/cart/CartBuyButton";
function Cart() {
  const { cartItems } = useSelector((state) => state.cart);
  if (cartItems.length == 0) {
    return <NoComponent text="Nothing In Your Cart" btnTxt="Browse Product" />;
  }
  return (
    <div className="row py-3">
      <div className="col-12 col-md-10 col-xl-8 mx-auto">
        <div
          id="cart"
          className="border p-3 bg-white text-dark my-3 my-md-0 rounded"
        >
          <h4 className="mb-3 px-1">Cart</h4>
          <ul className="list-group mb-3">
            {cartItems.map((item) => {
              return <CartItem key={item.id} item={item} />;
            })}
          </ul>
          <CartNumbers />
          <CartBuyButton />
        </div>
      </div>
    </div>
  );
}

export default Cart;
