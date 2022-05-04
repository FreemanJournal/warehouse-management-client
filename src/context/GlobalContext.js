import axios from "axios";
import { signOut } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import useSWR from "swr";
import { privateAxios } from "../routing/AxiosMiddleware";
import auth from "../utilities/firebase.init";


export const GlobalContext = createContext({});

export const GlobalProvider = ({ children }) => {
    const [user] = useAuthState(auth)
    const getProducts = (uri) => axios.get(uri).then(res => res.data);
    const { data, mutate, error } = useSWR(`${process.env.REACT_APP_uri}/items`, getProducts)
    const [products, setProducts] = useState();
    const [userProducts, setUserProducts] = useState();

    const createToken = async (email) => {
        console.log('createTokenEmail', email);
        const { data } = await axios.post(`${process.env.REACT_APP_uri}/createToken`, { email: email })
        localStorage.setItem('authAccessToken', data.authAccessToken)
    }

    const getMyProducts = async (email) => {
        try {
            const uri = `/items-user?email=${email}`
            const { data } = await privateAxios(uri)
            setUserProducts(data)
        } catch (error) {
            if (error.response.status === 401 || error.response.status === 403) {
                signOut(auth)
            }
        }
    }

    useEffect(() => {
        if (user) {
            createToken(user?.email)
        }
    }, [user])


    useEffect(() => {
        setProducts(data)
    }, [data, user])

    return (<GlobalContext.Provider value={{ products, userProducts, getMyProducts, setProducts, mutate, createToken, isLoading: !data && !error, isError: error }}>
        {children}
    </GlobalContext.Provider>)
}