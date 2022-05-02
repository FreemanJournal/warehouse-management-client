import { createContext, useEffect, useState } from "react";
import { getItems } from "../api/api";


export const GlobalContext = createContext({});

export const GlobalProvider = ({ children }) => {
    const [products, setProducts] = useState();

    useEffect(() => {
        const run = async () => {
            const {data} = await getItems();
            setProducts(data)
        }
        run();
    }, [])

    return (<GlobalContext.Provider value={{products,setProducts}}>
        {children}
    </GlobalContext.Provider>)
}