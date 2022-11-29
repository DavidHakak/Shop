import React, { useContext, useEffect } from "react";
import MainContext from "../../context/MainContext";
import "./AddToCart.css";

function AddToCart({ productId }) {
  const { cart } = useContext(MainContext);
  const { productListInCart } = cart;

  const onChangeTheProductInCart = (action) => {
    if (action === "minus") {
      productListInCart[productId].inCart--;
    } else if (action === "plus") productListInCart[productId].inCart++;
  };

  if (productListInCart[Number(productId)]) {
    if (productListInCart[productId].inCart > 0) {
      return (
        <div className="continerProductInTheCart">
          <button
            className="buttonPlus"
            onClick={() => {
              onChangeTheProductInCart("minus");
            }}
          >
            -
          </button>
          <div className="productInTheCart">
            {productListInCart[Number(productId)].inCart}
          </div>
          <button
            className="buttonMinus"
            onClick={() => {
              onChangeTheProductInCart("plus");
            }}
          >
            +
          </button>
        </div>
      );
    }
  }

  return (
    <div
      className="productNotInTheCart"
      onClick={() => {
        onChangeTheProductInCart("plus");
      }}
    >
      Add to cart
    </div>
  );
}

export default AddToCart;
