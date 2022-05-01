import React from "react";
import { RiDoubleQuotesL, RiStarFill, RiStarLine } from 'react-icons/ri';
import Rating from "react-rating";
import { Autoplay, Navigation, Pagination, Parallax } from "swiper";
import "swiper/css";
import "swiper/css/effect-cards";
import { Swiper, SwiperSlide } from "swiper/react";

import "./styles.css";

export default function Testimonial() {
    const feedback = [
        {
            comment: "Very professional and organized.Highly Recommended!!",
            rating: 4,
            name: "Faizur Rahman Khan"
        },
        {
            comment: "The green Warehouse is a thoroughly professional, customer focused racking supplier offering a wide range of services to any business in a warehouse environment.",
            rating: 5,
            name: "Sheikh Mujibur Rahman"
        },
        {
            comment: "They are very good  at pallet racking, picking shelves, automated warehouses and logistics software.Try them.Recommended",
            rating: 4.5,
            name: "Sohel Taj"
        },
    ]
    return (
        <>
            <Swiper
                style={{
                    "--swiper-navigation-color": "#fff",
                    "--swiper-pagination-color": "#fff",
                }}
                speed={600}
                parallax={true}
                pagination={{
                    clickable: true,
                }}
                autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                }}
                navigation={true}
                modules={[Parallax, Pagination, Navigation, Autoplay]}
                className="mySwiper"
            >
                {/* <div className="bg-amber-300 m-3  rounded-lg" >
                    <div className="flex flex-col items-center justify-center  px-4 lg:px-8 py-24">
                        <h3 className="text-slate-600 font-bold border-4  border-slate-600 py-2 px-24 font-mont text-center md:text-xl my-5 tracking-wider select-none uppercase">
                            Testimonial
                        </h3>
                        


                    </div>
                </div> */}

                <div
                    slot="container-start"
                    className="parallax-bg  "
                    style={{
                        backgroundImage: 'url("/images/single-banner.jpg")',
                    }}
                // data-swiper-parallax="-23%"
                ></div>
                {
                    feedback?.map((item, index) => {
                        const { name, comment, rating } = item
                        return (
                            <SwiperSlide className="text-center" key={index}>

                                <div className="testimonial-card">
                                    <div className="w-1/2 mx-auto">
                                        <i className=""> <RiDoubleQuotesL /> </i>
                                        <p>{comment}</p>
                                        <h5>{name}</h5>
                                        <div className="text-yellow-400">
                                            <Rating initialRating={rating} readonly fullSymbol={<RiStarFill className="" />} emptySymbol={<RiStarLine />} />
                                        </div>
                                    </div>
                                </div>

                            </SwiperSlide>
                        )

                    })
                }
            </Swiper>

        </>
    )
}
