import axios from "axios";
import { createContext, useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import useSWR from "swr";
import auth from "../utilities/firebase.init";


export const GlobalContext = createContext({});

export const GlobalProvider = ({ children }) => {
    const [user] = useAuthState(auth)
    const getProducts = (uri) => axios.get(uri).then(res => res.data);
    const { data, mutate, error } = useSWR(`${process.env.REACT_APP_uri}/items`, getProducts)
    const [products, setProducts] = useState();
    const [userProducts, setUserProducts] = useState();

  



    useEffect(() => {
        setProducts(data)
        const myProducts = data?.filter(item => item?.userEmail === user?.email)
        setUserProducts(myProducts)
    }, [data,user])

    return (<GlobalContext.Provider value={{ products,userProducts, setProducts, mutate, isLoading: !data && !error, isError: error }}>
        {children}
    </GlobalContext.Provider>)
}