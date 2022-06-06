import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react';
import { BsTrash, BsEyeFill } from "react-icons/bs";
import { Slide } from 'react-reveal';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import swal from 'sweetalert';
import useSWR from 'swr';
import { deleteItem } from '../../api/api';
import { GlobalContext } from "../../context/GlobalContext";
import Loader from '../../utilities/Loader';
const getProducts = (uri) => axios.get(uri).then(res => res.data);

export default function ManageInventories() {
    // const { products, setProducts } = useContext(GlobalContext)
    const [pageIndex, setPageIndex] = useState(0);
    const [amountDataPerPage, setAmountDataPerPage] = useState(0);
    const { data, error } = useSWR(`${process.env.REACT_APP_uri}/items-by-page?page=${pageIndex}&size=${amountDataPerPage}`, getProducts)

    const tableHead = ["", 'Products', 'Price', 'Quantity', 'Supplier', 'Status', '', ''];
    const navigate = useNavigate()
    const [userInventories, setUserInventories] = useState();
    const [pageCount, setPageCount] = useState(0);
    const [totalProduct, setTotalProduct] = useState();

    // useEffect(() => setUserInventories(products), [products])

    useEffect(() => {
        setAmountDataPerPage(3)
        setPageCount(Math.ceil(data?.count / 3))
        setUserInventories(data?.products)
        setTotalProduct(data?.count)
    }, [data])

    if (!pageCount) {
        return <Loader />
    }


    const onDeleteHandler = async (id, title) => {
        const value = await swal("Are you sure?", `Do you want to delete ${title} !`, "warning", {
            buttons: ["Cancel", "Confirm"],

        })
        if (!!value) {
            const { data } = await deleteItem(id)
            if (data) {
                toast.success(`${title} successfully deleted ?`)
                setUserInventories(prev => prev.filter(item => item._id !== id))
            } else {
                toast.error("Delete failed.")
            }
        }
    }
    return (

        <>
            <section className="bg-amber-300 m-3 pt-10  rounded-lg min-h-screen" >
                <div className="px-4 lg:px-8 py-24 rounded-lg">
                    <h3 className='py-10 font-mont'>You are showing {userInventories?.length} products out of {totalProduct}</h3>
                    <div className="rounded-lg overflow-hidden">
                        {userInventories?.length === 0 ? <div className="flex"><button type="button" onClick={() => navigate('/newInventory')} className="py-2 px-4 w-56 mx-auto  mb-10 bg-slate-600 hover:bg-slate-700  text-white  transition ease-in duration-200 text-center text-base font-semibold shadow-sm  rounded-lg ">
                            Add a new item
                        </button></div> : <table className="leading-normal w-full">
                            <thead>
                                <tr>
                                    {
                                        tableHead.map((item, index) => (
                                            <th key={index} scope="col" className={`${item === "Supplier" || item === "Status" || item === "Price" ? "hidden sm:table-cell" : ""} px-5 py-3 bg-white  border-b border-gray-200 text-gray-800  text-left text-sm uppercase font-normal`}>
                                                {item}
                                            </th>
                                        ))
                                    }

                                </tr>
                            </thead>
                            <tbody>
                                {
                                    userInventories?.map((item, index) => {
                                        const { _id, description, image, price, quantity, supplier, title } = item
                                        return (
                                            <tr key={index}>
                                                <Slide top big>
                                                    <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                                                        <div className="flex items-center cursor-pointer" onClick={() => navigate(`/inventory/${_id}`)}>

                                                            <div className="ml-3">
                                                                <p className="text-gray-900 whitespace-no-wrap capitalize">
                                                                    {(index + 1)}
                                                                </p>
                                                            </div>
                                                        </div>
                                                    </td>
                                                    <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                                                        <div className="flex items-center cursor-pointer" onClick={() => navigate(`/inventory/${_id}`)}>
                                                            <div className="flex-shrink-0">
                                                                <img alt="profil" src={image} className="mx-auto object-cover rounded-full h-10 w-10 " />

                                                            </div>
                                                            <div className="ml-3">
                                                                <p className="text-gray-900 whitespace-no-wrap capitalize">
                                                                    {title}
                                                                </p>
                                                            </div>
                                                        </div>
                                                    </td>
                                                    <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                                                        <p className="text-gray-900 whitespace-no-wrap">
                                                            ${price}
                                                        </p>
                                                    </td>
                                                    <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                                                        <p className="text-gray-900 whitespace-no-wrap">
                                                            {quantity}
                                                        </p>
                                                    </td>
                                                </Slide>
                                                <Slide top big>
                                                    <td className="hidden sm:table-cell px-5 py-5 border-b border-gray-200 bg-white text-sm">
                                                        <p className="text-gray-900 whitespace-no-wrap">
                                                            {supplier}
                                                        </p>
                                                    </td>
                                                    <td className="hidden sm:table-cell px-5 py-5 border-b border-gray-200 bg-white text-sm">
                                                        <span className="relative inline-block px-3 py-1 font-semibold text-green-900 leading-tight">
                                                            {parseInt(quantity) === 0 ? <>
                                                                <span aria-hidden="true" className="absolute inset-0 bg-pink-600  rounded-full">
                                                                </span>
                                                                <span className="relative text-white">
                                                                    sold
                                                                </span>
                                                            </> : <>
                                                                <span aria-hidden="true" className="absolute inset-0 bg-green-200 rounded-full">
                                                                </span>
                                                                <span className="relative">
                                                                    available
                                                                </span>
                                                            </>}
                                                        </span>
                                                    </td>
                                                    <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                                                        <button title={`View ${title}`} className="text-emerald-400 text-xl hover:text-pink-900" onClick={() => navigate(`/inventory/${_id}`)}>
                                                            <BsEyeFill />
                                                        </button>

                                                    </td>
                                                    <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                                                        <button title={`Delete ${title}`} className="text-pink-600 text-xl hover:text-slate-900" onClick={() => onDeleteHandler(_id, title)}>
                                                            <BsTrash />
                                                        </button>

                                                    </td>
                                                </Slide>
                                            </tr>
                                        )

                                    })

                                }

                            </tbody>
                        </table>}


                        {/* there goes pagination */}
                        <div className=" px-5 bg-white py-5 flex flex-col xs:flex-row items-center xs:justify-between">
                            <div className="flex items-center">
                                <button type="button" disabled={pageIndex === 0 ? true : false} onClick={() => setPageIndex(prev => prev - 1)} className="w-full disabled:opacity-30 p-4 border text-base rounded-l-xl text-gray-600 bg-white hover:bg-gray-100">
                                    <svg width="9" fill="currentColor" height="8" className="" viewBox="0 0 1792 1792" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M1427 301l-531 531 531 531q19 19 19 45t-19 45l-166 166q-19 19-45 19t-45-19l-742-742q-19-19-19-45t19-45l742-742q19-19 45-19t45 19l166 166q19 19 19 45t-19 45z">
                                        </path>
                                    </svg>
                                </button>

                                {
                                    [...Array(pageCount).keys()].map((number) => {
                                        return (
                                            <button type="button" key={number} onClick={() => setPageIndex(number)} className={`w-full px-4 py-2 border text-base text-gray-600  ${number === pageIndex ? "bg-indigo-500 text-stone-50 hover:text-stone-800" : "bg-white"} hover:bg-gray-100`}>
                                                {number + 1}
                                            </button>
                                        )
                                    })

                                }

                                <button type="button" disabled={pageIndex === (pageCount - 1) ? true : false} onClick={() => setPageIndex(prev => prev + 1)} className="w-full p-4 disabled:opacity-30 border-t border-b border-r text-base  rounded-r-xl text-gray-600 bg-white hover:bg-gray-100">
                                    <svg width="9" fill="currentColor" height="8" className="" viewBox="0 0 1792 1792" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M1363 877l-742 742q-19 19-45 19t-45-19l-166-166q-19-19-19-45t19-45l531-531-531-531q-19-19-19-45t19-45l166-166q19-19 45-19t45 19l742 742q19 19 19 45t-19 45z">
                                        </path>
                                    </svg>
                                </button>
                            </div>
                        </div>

                    </div>

                </div>


            </section>


        </>

    )
}
