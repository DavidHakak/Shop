import React, { useContext, useEffect } from "react";
import MainContext from "../../context/MainContext";
import axios from "axios";
import "./CategoryList.css";
import { Link } from "react-router-dom";

function CategoryList() {
  const { main } = useContext(MainContext);
  const { categoryList, setCategoryList } = main;

  useEffect(() => {
    const getCategoryList = async () => {
      const { data } = await axios.get(
        "https://fakestoreapi.com/products/categories"
      );

      setCategoryList(data);
    };

    getCategoryList();
    
  }, [setCategoryList]);

  return (
    <div className="CategoryList">
      {categoryList
        ? categoryList.map((category,i) => (

            <Link key={i} to={"/category/" + category}>
              <div className="category">{category}</div>
            </Link>
          ))
        : "loading"}
    </div>
  );
}

export default CategoryList;
