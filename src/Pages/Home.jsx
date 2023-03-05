import React from 'react';
import { GuestInfo } from '../Components/GuestInfo';
import { HomeSlider } from '../Components/HomeSlider';
import '../Styles/Home.css'

export const Home = () => {
    return (
        <>
            <HomeSlider />
            <GuestInfo />
        </>
    )
};

