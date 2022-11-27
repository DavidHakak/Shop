import React from "react";
import { Route, Routes } from "react-router-dom";
import CategoryList from "../../pages/CategoryList/CategoryList";
import Products from "../../pages/Products/Products";
import Product from "../../pages/Product/Product";
import NotFound from "../../pages/NotFound/NotFound";

function Main() {
  return (
    <main className="Main">
      Main
      <Routes>
        <Route path="/category" element={<CategoryList />} />
        <Route path="category/jewelery" element={<Products />} />
        <Route path="/item/3245" element={<Product />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </main>
  );
}

export default Main;
