import React from "react";
import TestimonialSlider from "./TestimonialSlider";



export default function Testimonial() {

    return (
        <section className="bg-amber-300 m-3  rounded-lg" >
            <div className="flex flex-col items-center justify-center  px-4 lg:px-8 py-8 md:pt-16">
                <h3 className="text-slate-600 font-bold border-4 mb-10 border-slate-600 py-2 px-24 font-mont text-center md:text-xl my-5 tracking-wider select-none uppercase">
                    Testimonial
                </h3>
                <TestimonialSlider/>
            </div>
        </section>
    )
}
