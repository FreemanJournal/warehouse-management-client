import React, { useContext } from 'react';
import { GlobalContext } from '../../context/GlobalContext';
import { useNavigate } from "react-router-dom";
import { Slide } from 'react-reveal';
import Loader from '../../utilities/Loader';

export default function HomeInventories() {
    const navigate = useNavigate();
    const { products, isLoading } = useContext(GlobalContext);

    if (isLoading) {
        return <Loader isLoading={isLoading} />
    }



    return (
        <section className="bg-amber-300 m-3  rounded-lg" >
            <div className="flex flex-col items-center justify-center  px-4 lg:px-8 py-24">
                <h3 className="text-slate-600 font-bold border-4  border-slate-600 py-2 px-24 font-mont text-center sm:text-xl my-5 tracking-wider select-none uppercase">
                    Products
                </h3>

                <Slide left>
                    <div className="home-products grid grid-cols-1 sm:grid-cols-3 w-full mt-24 gap-10">
                        {
                            products?.slice(0, 6)?.map((item, index) => {
                                const { _id, description, image, price, quantity, supplier, title } = item
                                return (

                                    <div key={index} className=" flex-shrink-0 mx-2 mb-6 relative overflow-hidden bg-white rounded-lg shadow-lg justify-self-center max-w-sm">

                                        <div className="relative pt-10 px-10 flex items-center justify-center">
                                            <div className="block absolute w-48 h-48 bottom-0 left-0 -mb-24 ml-3">
                                            </div>
                                            <picture>
                                                <img className="relative w-40" src={image} alt="shopping item" />
                                            </picture>
                                        </div>
                                        <div className="relative text-slate-800 px-6 pb-6 mt-6">
                                            <span className="bg-white text-slate-500 text-2xl font-bold  py-2 leading-none flex items-center">
                                                ${price}
                                            </span>
                                            <div className="flex justify-between">
                                                <span className="block font-semibold text-xl capitalize">
                                                    {title}
                                                </span>
                                                <span className="bg-white text-slate-500 font-bold px-3 py-2 leading-none flex items-center">
                                                    Quantity : {quantity}
                                                </span>

                                            </div>
                                            <div className="">
                                                <p className="bg-white  text-slate-500 line-clamp-3 ">
                                                    {description}
                                                </p>
                                                <span className="bg-white text-slate-500 font-bold mt-4 py-2 leading-none flex items-center">
                                                    Supplier : {supplier}
                                                </span>
                                            </div>

                                            <button type="button" className="py-2 px-4  mt-5 bg-slate-600 hover:bg-slate-700 focus:ring-slate-500 focus:ring-offset-slate-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-sm focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg " onClick={() => navigate(`/inventory/${_id}`)}>
                                                Update
                                            </button>

                                        </div>
                                    </div>
                                )
                            })
                        }

                    </div>
                    <button type="button" onClick={() => navigate('/manageInventory')} className="py-2 px-4 w-56  mt-10 bg-slate-600 hover:bg-slate-700  text-white  transition ease-in duration-200 text-center text-base font-semibold shadow-sm   rounded-lg ">
                        Manage Inventories
                    </button>
                </Slide>



            </div>

        </section>
    )
}
