import React, { useContext, useEffect } from "react";
import MainContext from "../../context/MainContext";
import Product from "../../Components/Product/Product";
import "./CategoryProducts.css";
import axios from "axios";
import { Link, useParams } from "react-router-dom";

function Products() {
  const { categoryName } = useParams();

  const { main } = useContext(MainContext);

  const { productsByCategory, setProductsByCategory } = main;

  useEffect(() => {
    const getCategoryProducts = async () => {
      const { data } = await axios.get(
        "https://fakestoreapi.com/products/category/" + categoryName
      );
      console.log(data);
      setProductsByCategory(data);
    };
    getCategoryProducts();
  }, []);

  return (
    <div className="CategoryProducts">
      <div></div>
      {categoryName
        ? productsByCategory.map((product) => (
            <Link to={"/item/" + product.id}>
              <Product product={product} key={product.id} />
            </Link>
          ))
        : "loading..."}
    </div>
  );
}

export default Products;
