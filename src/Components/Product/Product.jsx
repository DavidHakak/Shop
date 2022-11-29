import { Link } from "react-router-dom";
import AddToCart from "../AddToCart/AddToCart";
import "./Product.css";

function Product({ product }) {
  return (
    <div className="Product">
      <div className="divProductImg">
        <Link to={"/item/" + product.id}>
          <img src={product.image} alt={product.title} className="productImg" />
        </Link>
      </div>
      <div className="productTitle"> {product.title}</div>
      <div className="productPrice">$ {product.price}</div>

      <AddToCart productId={product.id} />
    </div>
  );
}

export default Product;
