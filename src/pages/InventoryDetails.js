import React, { useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import Footer from '../components/Footer/Footer';
import Navbar from '../components/Navbar/Navbar';
import SingleProducts from '../components/Products/SingleProducts';

export default function InventoryDetails() {
    const navigate = useNavigate();
    const { id } = useParams();
    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])



    return (
        <>
            <div className='flex flex-col justify-center items-center '>
                <div className='relative'>
                    <Navbar />
                    <SingleProducts id={id} />
                </div>
                <button type="button" onClick={() => navigate('/manageInventory')} className="py-2 px-4 w-56  mb-10 bg-slate-600 hover:bg-slate-700  text-white  transition ease-in duration-200 text-center text-base font-semibold shadow-md   rounded-lg ">
                    Manage Inventories
                </button>
            </div>
            <Footer />
        </>
    )
}
