import { useState } from "react";
import MainContext from "./MainContext";

export const ContextProvider = ({ children }) => {
    // Header state

    // Main state
const [categoryList,setCategoryList] = useState("");
    //Footer state

    return (
        <MainContext.Provider value={{
            header: {},
            main: {
                categoryList,
                setCategoryList,
            },
            cart: {},
        }}>
            {children}
        </MainContext.Provider>
    );
};