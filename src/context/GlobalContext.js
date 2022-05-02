import { createContext, useEffect, useState } from "react";
import { getItems } from "../api/api";
import useGetProduct from "../hooks/useGetProduct";


export const GlobalContext = createContext({});

export const GlobalProvider = ({ children }) => {
    const {items,isLoading,isError} = useGetProduct();
    const [products, setProducts] = useState();
    console.log('items',items);

    useEffect(()=>{
        setProducts(items)
    },[items])

    // useEffect(() => {
    //     const run = async () => {
    //         const {data} = await getItems();
    //         setProducts(data)
    //     }
    //     run();
    // }, [])

    return (<GlobalContext.Provider value={{products,setProducts,isLoading,isError}}>
        {children}
    </GlobalContext.Provider>)
}