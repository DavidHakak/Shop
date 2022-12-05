import React, { useContext, useEffect } from "react";
import AddToCart from "../../Components/AddToCart/AddToCart";
import axios from "axios";
import MainContext from "../../context/MainContext";
import { useParams } from "react-router-dom";
import "./SingleItem.css";
function SingleItem() {
  const { main } = useContext(MainContext);
  const { item, setItem } = main;

  const { itemId } = useParams();

  useEffect(() => {
    const getCategoryProducts = async () => {
      const { data } = await axios.get(
        "https://fakestoreapi.com/products/" + itemId
      );
      setItem(data);
    };

    getCategoryProducts();
  }, [itemId, setItem]);

  return (
    <div className="itemContainer">
      <div className="divItemImg">
        <img className="itemImg" src={item.image} alt={item.id} />
      </div>

      <h3 className="itemTitle">{item.title}</h3>
      <h3 className="itemDescription">{item.description}</h3>
      <h1 className="itemPrice">${item.price}</h1>
      <AddToCart product={item} />
    </div>
  );
}

export default SingleItem;
