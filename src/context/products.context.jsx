import {createContext, useEffect, useState} from "react";
import {getCategoriesAndDocuments} from "../utils/firebase/firebase.utils";


export const ProductsContext = createContext({products: [], setProducts: () => null})

export const ProductsProvider = ({children}) => {
    const [products] = useState([]);
    useEffect(() => {
        const getCategoriesMap = async () => {
            const categoryMap = await getCategoriesAndDocuments();
            console.log(categoryMap);
        }
        getCategoriesMap();
    }, []);
    const value = {products}
    return <ProductsContext.Provider value={value}>{children}</ProductsContext.Provider>
}