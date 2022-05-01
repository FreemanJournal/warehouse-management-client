import React, { useContext } from 'react';
import { GlobalContext } from '../../context/GlobalContext';

export default function Products() {
    const { products } = useContext(GlobalContext);
    return (
        <section className="bg-amber-300 m-3  rounded-lg" >

            <div className="flex flex-col items-center justify-center  px-4 lg:px-8 py-24">
                <h3 className="text-slate-600 font-bold border-4  border-slate-600 py-2 px-24 font-mont text-center md:text-xl my-5 tracking-wider select-none uppercase">
                    Products
                </h3>
                <div className="home-products grid grid-cols-1 md:grid-cols-3 w-full mt-24 gap-10">
                    {
                        products?.slice(0, 6)?.map((item, index) => {
                            const { description, image, price, quantity, supplier, title } = item
                            return (

                                <div className=" flex-shrink-0 mx-2 mb-6 relative overflow-hidden bg-white rounded-lg shadow-lg justify-self-center max-w-sm">

                                    <div className="relative pt-10 px-10 flex items-center justify-center">
                                        <div className="block absolute w-48 h-48 bottom-0 left-0 -mb-24 ml-3">
                                        </div>
                                        <picture>
                                            <img className="relative w-40" src={image} alt="shopping item" />
                                        </picture>
                                    </div>
                                    <div className="relative text-slate-800 px-6 pb-6 mt-6">
                                        <span className="bg-white text-slate-500 text-xs font-bold  py-2 leading-none flex items-center">
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

                                        <button type="button" className="py-2 px-4  mt-5 bg-slate-600 hover:bg-slate-700 focus:ring-slate-500 focus:ring-offset-slate-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg ">
                                            Update
                                        </button>

                                    </div>
                                </div>
                            )
                        })
                    }

                </div>


            </div>
        </section>
    )
}
