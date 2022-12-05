import React, { useContext } from "react";
import MainContext from "../../context/MainContext";
import "./Cart.css";

function Cart() {
  const { cart } = useContext(MainContext);
  const { productListInCart } = cart;

  return (
    <div className={"Cart"}>
      <div className="cart-item">
        {productListInCart.map((item, index) => {
          return (
            <div className="cart-item-header" key={index}>
              <div className="cart-price-totalItems-image">
                <img
                  src={item.img}
                  alt={item.title}
                  style={{ width: 50, height: 50 }}
                />
                <div className="cart-item-price">price: ${item.price}</div>
                <div className="cart-item-inCart">total: {item.inCart}</div>
              </div>
              <div className="cart-item-title">{item.title}</div>
            </div>
          );
        })}
      </div>
      
      <div className="cart-footer">
        <div className="totalPayment">
          total price : $
          {productListInCart
            .reduce((total, item) => total + item.price * item.inCart, 0)
            .toFixed(2)}
        </div>
        <div className="totalItems">
          total pcs :{" "}
          {productListInCart.reduce((total, item) => total + item.inCart, 0)}
        </div>
      </div>
    </div>
  );
}
export default Cart;
