import axios from "axios";
import { useEffect, useState } from "react";
import useSWR from "swr";
const fetcher = url => axios.get(url).then(res => res.data)
function Articles() {

    const { data, error } = useSWR(`${process.env.REACT_APP_uri}/blogs`, fetcher)
 
    return (
        <>
            <section className="bg-amber-300  m-3 rounded-lg flex flex-col pt-10">
                <div className="px-6 py-8 pt-24 ">


                    <section className="leading-relaxed max-w-screen-xl mt-12 mx-auto px-4 lg:px-8">
                        <div className="space-y-3 text-center">
                            <h1 className="text-3xl text-gray-800 font-semibold">
                                Some Common Technical Q&A
                            </h1>

                        </div>
                        <div className="mt-14 gap-4 sm:grid sm:grid-cols-2 lg:grid-cols-2">
                            {
                                data?.map((item, idx) => (
                                    <div
                                        className="space-y-3 mt-5"
                                        key={idx}
                                    >
                                        <h4 className="text-xl text-gray-700 font-medium">
                                            {item.question}
                                        </h4>
                                        <p className="text-gray-500">
                                            {item.answer}
                                        </p>
                                    </div>
                                ))
                            }
                        </div>
                    </section>
                </div>
            </section>

        </>

    );
}
export default Articles;