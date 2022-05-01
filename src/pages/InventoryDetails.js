import React, { useContext, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { GlobalContext } from '../context/GlobalContext';

export default function InventoryDetails() {
    const { products } = useContext(GlobalContext);
    const { id } = useParams();
    let productDetails = products?.find(item => item._id === id) || {}

    const { _id, productId, description, image, price, quantity, supplier, title } = productDetails

    return (
        <>

            <div className="relative  mx-auto px-4 sm:px-6 lg:px-8">
                <div className="pricing-box max-w-lg mx-auto rounded-lg shadow-lg overflow-hidden lg:max-w-none lg:flex">
                    <div className="bg-white  px-6 py-8 lg:flex-shrink-1 lg:p-12">
                        <div className="mt-8 flex flex-col md:flex-row gap-5">

                            <div class="text-center w-full border flex shadow-md">
                                <img src={image} alt="" className='mx-auto' />
                            </div>
                            <div className="w-full flex flex-col gap-10">
                                <div className="">
                                    <h3 className="text-2xl flex justify-between items-center leading-8 font-extrabold text-slate-700 sm:text-3xl sm:leading-9 ">
                                        <span>{title}</span>
                                        <span className='text-xs'>#{_id}</span>
                                    </h3>
                                    <p className="mt-6 text-base leading-6 text-slate-500 ">
                                        {description}
                                    </p>
                                    <p className="mt-4 text-sm leading-5  font-medium text-slate-500 ">
                                        Supplier: {supplier}
                                    </p>
                                </div>
                                <div className="py-8 px-6 text-center bg-slate-50  lg:flex-shrink-0 lg:flex lg:flex-col lg:justify-center lg:p-12">

                                    <div className="flex gap-10 text-center mx-auto w-full">
                                        <div className="w-full">
                                            <p className="text-lg leading-6 font-bold text-slate-700 ">
                                                Price
                                            </p>
                                            <p className="mt-4 flex items-center justify-center text-5xl leading-none font-extrabold text-slate-700 ">
                                                ${price}
                                            </p>
                                        </div>
                                        <div className="w-full">
                                            <p className="text-lg leading-6 font-bold text-slate-700 ">
                                                Quantity
                                            </p>
                                            <p className="mt-4 flex items-center justify-center text-5xl leading-none font-extrabold text-slate-700 ">
                                                {quantity}
                                            </p>
                                        </div>
                                    </div>
                                    <div className="mt-12">
                                        <div className="rounded-md  flex gap-10">
                                            <button type="button" className="py-2 px-4  bg-emerald-600 hover:bg-emerald-700 focus:ring-emerald-500 focus:ring-offset-emerald-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg ">
                                                Delivered
                                            </button>
                                            <button type="button" className="py-2 px-4  bg-slate-600 hover:bg-slate-700 focus:ring-slate-500 focus:ring-offset-slate-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg ">
                                                Restock
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
