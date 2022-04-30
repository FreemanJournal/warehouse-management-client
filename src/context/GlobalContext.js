import { createContext, useEffect, useState } from "react";
import { getItems } from "../api/apiHandler";

export const GlobalContext = createContext({});

export const GlobalProvider = ({ children }) => {
    const [products, setProducts] = useState();

    useEffect(() => {
        const run = async () => {
            const result = await getItems();
            setProducts(result)
        }
        run();
    }, [])

    return (<GlobalContext.Provider value={{products}}>
        {children}
    </GlobalContext.Provider>)
}