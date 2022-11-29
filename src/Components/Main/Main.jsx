import React from "react";
import { Route, Routes} from "react-router-dom";
import CategoryList from "../../pages/CategoryList/CategoryList";
import CategoryProducts from "../../pages/CategoryProducts/CategoryProducts";
import NotFound from "../../pages/NotFound/NotFound";
import SingleItem from "../../pages/SingleItem/SingleItem";

import "./Main.css";

function Main() {
  return (
    <main className="Main">
      <Routes>
        <Route path="/" element={<CategoryList />} />
        <Route path="/category/:categoryName" element={<CategoryProducts />} />
        <Route path="/item/:itemId" element={<SingleItem />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </main>
  );
}

export default Main;
