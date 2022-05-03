import axios from "axios";
import { createContext, useEffect, useState } from "react";
import useSWR from "swr";


export const GlobalContext = createContext({});

export const GlobalProvider = ({ children }) => {
    const getProducts = (uri) => axios.get(uri).then(res => res.data);
    const { data, mutate, error } = useSWR(`${process.env.REACT_APP_uri}/items`, getProducts)
    const [products, setProducts] = useState();


    useEffect(() => {
        setProducts(data)
    }, [data])

    return (<GlobalContext.Provider value={{ products, setProducts, mutate,isLoading: !data && !error, isError: error }}>
        {children}
    </GlobalContext.Provider>)
}