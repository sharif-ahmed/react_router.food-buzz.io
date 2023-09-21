/* eslint-disable no-unused-vars */
import React from 'react';
import  banner  from '../../assets/banner.jpg';

const Hero = () => {
    return (
        <div className='lg:h-screen'>
            <img className="w-full" src={banner} alt="" />
        </div>
    );
};

export default Hero;