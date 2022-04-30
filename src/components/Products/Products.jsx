import React, { useState } from 'react'

export default function Products() {
    const [products, setProducts] = useState();
    
    return (
        <div className="bg-amber-300 m-3 mt-0 rounded-b-lg" >

            <div className="flex flex-col items-center justify-center  px-4 lg:px-8 py-24">
                <h3 className="text-slate-600 font-bold border-4 border-double border-white py-2 px-24 font-mont text-center md:text-xl my-5 tracking-wider select-none uppercase">
                    Products
                </h3>


            </div>
        </div>
    )
}
