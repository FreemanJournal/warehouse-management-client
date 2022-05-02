import { createContext, useEffect, useState } from "react";
import useGetProduct from "../hooks/useGetProduct";


export const GlobalContext = createContext({});

export const GlobalProvider = ({ children }) => {
    const {items,isLoading,isError} = useGetProduct();
    const [products, setProducts] = useState();
  

    useEffect(()=>{
        setProducts(items)
    },[items])

    return (<GlobalContext.Provider value={{products,setProducts,isLoading,isError}}>
        {children}
    </GlobalContext.Provider>)
}