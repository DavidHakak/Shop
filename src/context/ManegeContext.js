import { useState } from "react";
import MainContext from "./MainContext";

export const ContextProvider = ({ children }) => {
    // Header state

    // Main state
    const [categoryList, setCategoryList] = useState([]);
    const [productsByCategory, setProductsByCategory] = useState([]);
    const [item, setItem] = useState('');
    //Cart state
    const [productListInCart, setProductListInCart] = useState([])
    return (
        <MainContext.Provider value={{
            header: {},
            main: {
                categoryList,
                setCategoryList,
                productsByCategory,
                setProductsByCategory,
                item,
                setItem,
            },
            cart: { productListInCart, setProductListInCart, },
        }}>
            {children}
        </MainContext.Provider>
    );
};