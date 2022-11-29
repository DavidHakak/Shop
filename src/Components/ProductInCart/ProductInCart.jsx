import React from "react";
import AddToCart from "../AddToCart/AddToCart";

function ProductInCart({product}) {
  return (
    <div className="ProductInCart">
      <div className="divImgInCart">
        <img
          className="imgInCart"
          src="https://fakestoreapi.com/img/61U7T1koQqL._AC_SX679_.jpg"
          alt=""
        />
      </div>
     <AddToCart product={product}/>
    </div>
  );
}

export default ProductInCart;
