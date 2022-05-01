import React, { useEffect, useState } from "react";
import { RiDoubleQuotesL, RiStarFill, RiStarLine } from 'react-icons/ri';
import Rating from "react-rating";
import { Autoplay, Navigation, Pagination, Parallax } from "swiper";
import "swiper/css";
import "swiper/css/effect-cards";
import { Swiper, SwiperSlide } from "swiper/react";
import { getFeedBacks } from "../../api/api";


import "./styles.css";

export default function TestimonialSlider() {
    const [feedback,setFeedback] = useState([])

    useEffect(()=>{
        const getFeedback = async ()=>{
            const result = await getFeedBacks()
            setFeedback(result.data)
        }
        getFeedback();
    },[])

 
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
                                    <div className="md:w-1/2 mx-auto ">
                                        <i className=""> <RiDoubleQuotesL /> </i>
                                        <p>{comment}</p>
                                        <h5 className="font-bold font-mont text-emerald-400">{name}</h5>
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
