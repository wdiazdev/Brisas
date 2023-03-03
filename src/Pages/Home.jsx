import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// import required modules
import { Pagination, Navigation, EffectFade } from "swiper";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import 'swiper/css/navigation';
//Components
import { MainSlider } from "../Components/MainSlider";
//CSS Styles
import "../Styles/HomeSlider.css";
//Data
import { MainSliderInfo } from "../Data/Data";


export const Home = () => {
    return (
        <div className="home--container">
            <Swiper
                spaceBetween={30}
                centeredSlides={true}
                effect={"fade"}
                pagination={{
                    clickable: true,
                }}
                navigation={{
                    clickable: true,
                }}
                modules={[Pagination, Navigation, EffectFade]}
                className="mySwiper"
            >

                {MainSliderInfo.map((item) => {
                    return (
                        <SwiperSlide>
                            <MainSlider item={item} />
                        </SwiperSlide>
                    )
                })}
            </Swiper>
        </div>
    )
};
