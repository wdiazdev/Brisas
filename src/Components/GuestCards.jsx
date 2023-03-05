import React from 'react'
import { HomeCard } from '../Data/HomeCards';

export const GuestCards = () => {
    return (
        <div className='guest--info--cards'>

            {HomeCard.map((item) => {
                return (
                    <div className='guest--info--card' key={item.id} data-aos="fade-up" data-aos-duration="3000">

                        <img src={item.img} alt='Card image' />

                        <div className='card--info'>
                            <h2>{item.title}</h2>
                            <span>{item.subtitle}</span>
                            <p>{item.description}</p>
                            <button className='guest--card--btn'>{item.btnText}</button>
                        </div>

                    </div>
                )
            })}

        </div>
    )
};
