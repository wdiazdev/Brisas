import React from 'react'
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
// import required modules
import { Pagination, Navigation, Parallax } from 'swiper';
// Import Swiper 
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

export const HomeSlider = () => {
    return (
        <>
            <Swiper
                style={{
                    '--swiper-navigation-color': '#fff',
                    '--swiper-pagination-color': '#fff',
                }}
                speed={600}
                parallax={true}
                pagination={{
                    clickable: 'true'
                }}
                navigation={true}
                modules={[Parallax, Pagination, Navigation]}
                className='mySwiper'
            >

                <div
                    slot='container-start'
                    className='parallax-bg'
                    style={{
                        'backgroundImage':
                            'url(https://free4kwallpapers.com/uploads/originals/2017/03/13/beach-resort-wallpaper.jpg)',
                    }}
                    data-swiper-parallax='-23%'
                >
                </div>

                <div className='overlay'></div>

                <SwiperSlide>

                    <div className='main--info' data-aos='fade-right' data-aos-duration='2000'>

                        <div>
                            <h2 className='title' data-swiper-parallax='-300' >
                                Indulge, Escape, Explore
                            </h2>
                            <h3 className='subtitle'>with up to 50% off + $100 SPA credit</h3>
                        </div>

                        <div className='text' data-swiper-parallax='-100'>
                            <p>
                                Eager to find the better deals for your stay? Don't sweat it, our
                                online booking engine will automatically apply all combinable offers
                                to give you the best possible rate with some other sweet perks for
                                your travel dates.
                            </p>
                        </div>

                        <button className='main--btn'>BOOK NOW</button>

                    </div>

                </SwiperSlide>

                <SwiperSlide>

                    <div className='main--info'>

                        <div>
                            <h2 className='title' data-swiper-parallax='-300'>
                                Ultimate all-inclusive
                            </h2>
                            <h3 className='subtitle'>YOU TRULY CAN HAVE IT ALL</h3>
                        </div>

                        <div className='text' data-swiper-parallax='-100'>
                            <p>
                                Our resort covers every sun-soaked moment of delectable dining, thrilling entertainment,
                                exciting on-site recreation, even fine wine and top shelf liquor. That's right. It's all
                                included.
                                And if you're not feeling the all-inclusive love just yet, keep reading. You will be.
                            </p>
                        </div>

                        <button className='main--btn' data-swiper-parallax='-300'>LEARN MORE</button>

                    </div>

                </SwiperSlide>

                <SwiperSlide>

                    <div className='main--info'>

                        <div>
                            <h2 className='title' data-swiper-parallax='-300'>
                                Luxurious room experience!
                            </h2>
                            <h3 className='subtitle'>LAVISH DIGS & NON-STOP STYLE</h3>
                        </div>

                        <div className='text' data-swiper-parallax='-100'>
                            <p>
                                Discover romance and relaxation in smash-hit rooms with stylish
                                décor, stunning views, and luxury amenities, including a double
                                hydrospa tub, LCD TVs, 24-hour room service, and free WiFi.
                            </p>
                        </div>

                        <button className='main--btn' data-swiper-parallax='-300'>LEARN MORE</button>

                    </div>

                </SwiperSlide>

            </Swiper>

        </>
    )
};
