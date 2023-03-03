import React from 'react'

export const MainSlider = ({ item }) => {
    return (
        <div className='main--slider'>
            <img src={item.imgUrl} alt="main background" />
            <div className='overlay'></div>
            <h2>{item.name}</h2>
        </div>
    )
};
