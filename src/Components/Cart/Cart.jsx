import React, { useContext } from "react";
import MainContext from "../../context/MainContext";
import ProductInCart from "../ProductInCart/ProductInCart";
import "./Cart.css";

function Cart() {
  const { cart } = useContext(MainContext);
  const { productListInCart } = cart;
 


  let totalItems= 0;
  let totalPayment= 0;
  const sumPayment =()=>{

  }
  
  
  return (
    <div className="Cart">
      {/* {productListInCart.foreach((product) => {
        <ProductInCart img={product.inCart}/>;
      })} */}
      <footer className="footerCart">
        <span className="totalItems">כמות המוצרים : 0</span>
        <span className="totalPayment"> סה׳׳כ לתשלום : 0 </span>
      </footer>
    </div>
  );
}

export default Cart;


