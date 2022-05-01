import React from "react";
import { RiDoubleQuotesL, RiStarFill, RiStarLine } from 'react-icons/ri';
import Rating from "react-rating";
import { Autoplay, Navigation, Pagination, Parallax } from "swiper";
import "swiper/css";
import "swiper/css/effect-cards";
import { Swiper, SwiperSlide } from "swiper/react";

import "./styles.css";

export default function TestimonialSlider() {
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
                loop={true}
                autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                }}
                navigation={true}
                modules={[Parallax, Pagination, Navigation, Autoplay]}
                className="mySwiper rounded-lg "
            >
                <div
                    slot="container-start"
                    className="parallax-bg bg-transparent"
                    // style={{
                    //     backgroundImage: 'url("/images/single-banner.jpg")',
                    // }}
                // data-swiper-parallax="-23%"
                ></div>
                {
                    feedback?.map((item, index) => {
                        const { name, comment, rating } = item
                        return (
                            <SwiperSlide className="text-center" key={index}>

                                <div className="testimonial-card">
                                    <div className="md:w-1/2 mx-auto text-slate-600">
                                        <i className=""> <RiDoubleQuotesL /> </i>
                                        <p>{comment}</p>
                                        <h5 className="font-bold font-mont">{name}</h5>
                                        <div className="text-emerald-400">
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
