import React, { useContext } from 'react'
import { Slide } from 'react-reveal';
import { toast } from 'react-toastify';
import swal from 'sweetalert';
import { deleteItem, getItems } from '../../api/api';
import { GlobalContext } from "../../context/GlobalContext";
export default function ManageInventories() {
    const { products,setProducts } = useContext(GlobalContext)
    const tableHead = ['Products', 'Price', 'Quantity', 'Supplier', 'Status', '']
    const onDeleteHandler = async (id, title) => {
        const value = await swal({ title: `Do you want to delete ${title} ?` })
        if (value) {
            const { data } = await deleteItem(id)
            console.log(data);
            if (data) {
                toast.success(`${title} successfully deleted ?`)
                const { data } = await getItems();
                setProducts(data)
            }else{
                toast.error("Delete failed.")
            }

        }

        // const { data } = await deleteItem(id)


    }
    return (

        <>
            <section className="bg-amber-300 m-3 pt-10  rounded-lg" >
                <div className="px-4 lg:px-8 py-24 rounded-lg">
                    <div className="rounded-lg overflow-hidden">
                        <table className="leading-normal w-full">
                            <thead>
                                <tr>
                                    {
                                        tableHead.map((item, index) => (
                                            <th key={index} scope="col" className="px-5 py-3 bg-white  border-b border-gray-200 text-gray-800  text-left text-sm uppercase font-normal">
                                                {item}
                                            </th>
                                        ))
                                    }

                                </tr>
                            </thead>
                            <tbody>
                                {
                                    products?.map((item, index) => {
                                        const { _id, description, image, price, quantity, supplier, title } = item
                                        return (
                                            <tr key={index}>
                                                <Slide top big>
                                                    <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                                                        <div className="flex items-center">
                                                            <div className="flex-shrink-0">
                                                                <img alt="profil" src={image} className="mx-auto object-cover rounded-full h-10 w-10 " />

                                                            </div>
                                                            <div className="ml-3">
                                                                <p className="text-gray-900 whitespace-no-wrap">
                                                                    {title}
                                                                </p>
                                                            </div>
                                                        </div>
                                                    </td>
                                                    <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                                                        <p className="text-gray-900 whitespace-no-wrap">
                                                            {price}
                                                        </p>
                                                    </td>
                                                    <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                                                        <p className="text-gray-900 whitespace-no-wrap">
                                                            {quantity}
                                                        </p>
                                                    </td>
                                                </Slide>
                                                <Slide top big>
                                                    <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                                                        <p className="text-gray-900 whitespace-no-wrap">
                                                            {supplier}
                                                        </p>
                                                    </td>
                                                    <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
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
                                                        <button className="text-pink-600 hover:text-pink-900" onClick={() => onDeleteHandler(_id, title)}>
                                                            Delete
                                                        </button>
                                                    </td>
                                                </Slide>
                                            </tr>
                                        )

                                    })

                                }

                            </tbody>
                        </table>
                        {/* <div className=" px-5 bg-white py-5 flex flex-col xs:flex-row items-center xs:justify-between">
                            <div className="flex items-center">
                                <button type="button" className="w-full p-4 border text-base rounded-l-xl text-gray-600 bg-white hover:bg-gray-100">
                                    <svg width="9" fill="currentColor" height="8" className="" viewBox="0 0 1792 1792" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M1427 301l-531 531 531 531q19 19 19 45t-19 45l-166 166q-19 19-45 19t-45-19l-742-742q-19-19-19-45t19-45l742-742q19-19 45-19t45 19l166 166q19 19 19 45t-19 45z">
                                        </path>
                                    </svg>
                                </button>
                                <button type="button" className="w-full px-4 py-2 border-t border-b text-base text-indigo-500 bg-white hover:bg-gray-100 ">
                                    1
                                </button>
                                <button type="button" className="w-full px-4 py-2 border text-base text-gray-600 bg-white hover:bg-gray-100">
                                    2
                                </button>
                                <button type="button" className="w-full px-4 py-2 border-t border-b text-base text-gray-600 bg-white hover:bg-gray-100">
                                    3
                                </button>
                                <button type="button" className="w-full px-4 py-2 border text-base text-gray-600 bg-white hover:bg-gray-100">
                                    4
                                </button>
                                <button type="button" className="w-full p-4 border-t border-b border-r text-base  rounded-r-xl text-gray-600 bg-white hover:bg-gray-100">
                                    <svg width="9" fill="currentColor" height="8" className="" viewBox="0 0 1792 1792" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M1363 877l-742 742q-19 19-45 19t-45-19l-166-166q-19-19-19-45t19-45l531-531-531-531q-19-19-19-45t19-45l166-166q19-19 45-19t45 19l742 742q19 19 19 45t-19 45z">
                                        </path>
                                    </svg>
                                </button>
                            </div>
                        </div> */}
                    </div>

                </div>


            </section>


        </>

    )
}
