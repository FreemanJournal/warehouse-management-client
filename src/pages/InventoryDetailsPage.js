import React, { useContext, useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { useNavigate, useParams } from 'react-router-dom';
import Footer from '../components/Footer/Footer';
import Navbar from '../components/Navbar/Navbar';
import SingleProducts from '../components/Products/SingleProducts';
import { GlobalContext } from '../context/GlobalContext';
import Loader from '../utilities/Loader';

export default function InventoryDetailsPage() {
    const { id } = useParams();
    const { isLoading } = useContext(GlobalContext)

    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])
    console.log('isLoading', isLoading);
    if (isLoading) {
        return <Loader isLoading={isLoading} />
    }


    return (
        <>
            <Helmet>
                <title>Inventory Details</title>
            </Helmet>
            <Navbar />
            <SingleProducts id={id} />
            <Footer />
        </>
    )
}
