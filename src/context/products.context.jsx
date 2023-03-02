import {createContext, useState} from "react";


export const ProductsContext = createContext({products: [], setProducts: () => null})

export const ProductsProvider = ({children}) => {
    const [products] = useState([]);
    const value = {products}
    return <ProductsContext.Provider value={value}>{children}</ProductsContext.Provider>
}