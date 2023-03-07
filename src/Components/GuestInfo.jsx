import React from 'react'
import { Parallax } from 'react-parallax';
import parallaximg1 from '../assets/parallaximg1.jpg';
import { GuestCards } from './GuestCards';
import '../Styles/GuestInfo.css';
import CasinoBanner from '../assets/casinohomebanner.jpg';

const ImgOne = () => (
    <Parallax bgImage={parallaximg1} strength={1000} className='home--parallax'>
        <div className="parallax--overlay"></div>
        <div className='home--parallax--hero'>
        </div>
    </Parallax>
);

export const GuestInfo = () => {
    return (
        <div className='guest--info--container'>

            <div
                className='guest--info--hero'
                data-aos='fade-up'
                data-aos-duration='2000'
            >

                <h2>Welcome To The All Inclusive Paradise</h2>

                <p>
                    Thrilling gaming action in the biggest and best
                    casino in the Caribbean, exhilarating nightlife,
                    tantalizing culinary options, state-of-the-art meeting
                    facilities and rooms worth tweeting about, all infused
                    with our legendary santuary vibe. This is Brisas after all.
                    The best All Inclusive Resort in Punta Cana.
                </p>

            </div>

            <ImgOne />

            <GuestCards />

            <div className='casino--banner--container'>

                <div className='casino-overlay'></div>

                <img src={CasinoBanner} alt='Casino' />

                <div className='casino--banner-info'>

                    <h2>Gaming</h2>
                    <p>
                        The Brisas Casino Punta Cana rocks with over 200 of your
                        favorite slot and video poker machines. We have all your old
                        favorites, starting with penny machines and go up in denomination
                        from there.
                    </p>

                    <button className='guest--card--btn'>Learn More</button>

                </div>

            </div>

        </div>

    )
};
