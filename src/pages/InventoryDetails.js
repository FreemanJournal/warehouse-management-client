import React, { useContext, useEffect } from 'react';
import { Slide } from 'react-reveal';
import { useParams } from 'react-router-dom';
import Footer from '../components/Footer/Footer';
import Navbar from '../components/Navbar/Navbar';
import SingleProducts from '../components/Products/SingleProducts';
import { GlobalContext } from '../context/GlobalContext';

export default function InventoryDetails() {

    const { id } = useParams();

    useEffect(() => {
        window.scrollTo(0, 0)



    }, [])


    return (
        <div className='relative'>
            <Navbar />
            <SingleProducts id={id} />
            <Footer />

        </div>
    )
}
