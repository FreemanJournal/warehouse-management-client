import React, { useContext, useEffect, useState } from 'react';
import { Slide } from 'react-reveal';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import swal from 'sweetalert';
import { getItems, updateItemQtn } from '../../api/api';
import { GlobalContext } from '../../context/GlobalContext';
import "./sweetAlert.css";

const fetcher = (url) => fetch(url).then((res) => res.json());

export default function SingleProducts({ id }) {
    const { products, setProducts } = useContext(GlobalContext);
    let productDetails = products?.find(item => item._id === id) || {}
    const { _id, productId, description, image, price, quantity, supplier, title } = productDetails
    const [productQuantity, setProductQuantity] = useState(quantity);
    const navigate = useNavigate();

    useEffect(() => {
        setProductQuantity(quantity)
    }, [quantity]);


    const deliveredHandler = async (qtn) => {
        console.log('qtn', qtn);
        if (parseInt(qtn) >= 0) {
            try {
                const { data: updateData } = await updateItemQtn({ productQuantity: qtn, productId });
                if (updateData) {
                    toast.success(`${title} quantity updated!`, { toastId: 1 })
                } else {
                    return;
                }
                const { data } = await getItems();
                setProducts(data)

            } catch (error) {
                toast.error(`${title} quantity failed to update!`, { toastId: 2 })
            }
        }
    }
    const restockHandler = async () => {
        try {
            const quantity = await swal({
                text: 'Product Quantity',
                className: "blue-bg",
                content: {
                    element: "input",
                    attributes: {
                        placeholder: productQuantity,
                        type: "number"
                    }
                },

                button: {
                    text: "Update",
                    closeModal: false,
                },
            })
            if (parseInt(quantity) >= 0) {
                deliveredHandler(quantity)
                swal.stopLoading();
                swal.close();
            } else {
                swal.stopLoading();
                swal.close();

            }

        } catch (error) {
            toast.error(`${title} quantity failed to update!`, { toastId: 2 })

        }


    }


    return (
        <section className="bg-amber-300 m-3 pt-10  rounded-lg flex flex-col" >
            <div className="  px-6 py-8 lg:flex-shrink-1 lg:p-12">
                <div className="mt-8 flex flex-col md:flex-row gap-5 overflow-hidden">
                    <div class="text-center w-full flex ">
                        <Slide left>
                            <img src={image} alt="" className='mx-auto rounded-2xl' />

                        </Slide>
                    </div>

                    <div className="w-full flex flex-col gap-10">
                        <Slide right>
                            <div className="">
                                <h3 className="text-2xl flex justify-between items-center leading-8 font-extrabold text-slate-700 sm:text-3xl sm:leading-9 ">
                                    <span className='font-mont'>{title}</span>
                                    <span className='text-xs'>#{_id}</span>
                                </h3>
                                <p className="mt-6 text-base leading-6 text-slate-600 ">
                                    {description}
                                </p>
                                <p className="mt-4 text-sm leading-5 font-mont font-bold text-slate-800 ">
                                    Supplier: {supplier}
                                </p>
                            </div>
                            <div className="py-8 px-6 text-center border-t-2 border-slate-600  lg:flex-shrink-0 lg:flex lg:flex-col lg:justify-center lg:p-12">

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
                                            {productQuantity}
                                        </p>
                                    </div>
                                </div>
                                <div className="mt-12">
                                    <div className="rounded-md  flex gap-10">
                                        <button type="button" onClick={() => deliveredHandler(productQuantity - 1)} className={` ${productQuantity ? "bg-emerald-600" : "bg-pink-600 pointer-events-none"} py-2 px-4  hover:bg-emerald-700  text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md   rounded-lg`}>
                                            {productQuantity ? "Delivered" : "Sold"}
                                        </button>
                                        <button type="button" onClick={restockHandler} className="py-2 px-4  bg-slate-600 hover:bg-slate-700  text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md   rounded-lg ">
                                            Restock
                                        </button>
                                    </div>
                                </div>
                            </div>

                        </Slide>

                    </div>
                </div>
            </div>
            <Slide bottom>
                <button type="button" onClick={() => navigate('/manageInventory')} className="py-2 px-4 w-56 mx-auto  mb-10 bg-slate-600 hover:bg-slate-700  text-white  transition ease-in duration-200 text-center text-base font-semibold shadow-md   rounded-lg ">
                    Manage Inventories
                </button>
            </Slide>

        </section>
    )
}
