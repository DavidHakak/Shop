import React, { useContext, useEffect } from "react";
import MainContext from "../../context/MainContext";

function CategoryList() {

  const { main } = useContext(MainContext);
  const {categoryList, setCategoryList} = main;
  

  useEffect(() => {
    fetch("https://fakestoreapi.com/products/categories")
      .then((res) => res.json())
      .then((json) => setCategoryList(json));
  }, []);

  return (
    <div className="CategoryList">
      <ul>
        {categoryList.map(c=>console.log(c))
      }
      </ul>
    </div>
  );
}

export default CategoryList;
