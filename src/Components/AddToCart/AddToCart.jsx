import React, { useContext } from "react";

import MainContext from "../../context/MainContext";
import "./AddToCart.css";

function AddToCart({ product }) {
  const { cart } = useContext(MainContext);

  const { productListInCart, setProductListInCart } = cart;

  const isInCart = productListInCart.findIndex(
    (item) => item.id === product.id
  );

  const removedInCart = () => {
    if (productListInCart[isInCart].inCart > 0)
      setProductListInCart(productListInCart, {
        ...productListInCart[isInCart].inCart--,
      });
  };

  const addingInCart = () => {
    setProductListInCart(productListInCart, {
      ...productListInCart[isInCart].inCart++,
    });
  };

  const createObjectItemInListCart = () => {
    setProductListInCart((oldList) => [
      ...oldList,
      {
        id: product.id,
        img: product.image,
        title: product.title,
        price: product.price,
        inCart: 1,
      },
    ]);
  };

  if (isInCart !== -1) {
    return (
      <div className="continerProductInTheCart">
        <button className="buttonPlus" onClick={addingInCart}>
          +
        </button>
        <div className="productInTheCart">
          {productListInCart[isInCart].inCart}
        </div>
        <button className="buttonMinus" onClick={removedInCart}>
          -
        </button>
      </div>
    );
  } else {
    return (
      <div className="addToCart" onClick={createObjectItemInListCart}>
        Add to cart
      </div>
    );
  }
}

export default AddToCart;
