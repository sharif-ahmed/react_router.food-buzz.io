/* eslint-disable no-unused-vars */
import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <div className='py-5'>
            <div className='container mx-auto'>
                <nav className='flex gap-5 lg:gap-0 flex-col lg:flex-row  items-center justify-between  text-black'>
                    <div>
                        <Link to={"/"}><h2 className='text-2xl font-bold'><span className='text-orange-600'>FOOD</span> BUZZ</h2></Link>
                    </div>
                    <div className='flex gap-5'>
                        <Link to={"/"} className='text-base font-medium hover:text-orange-600'>Home</Link>
                        <Link to={"/categories"} className='text-base font-medium hover:text-orange-600'>Categories</Link>
                        <Link to={"/meals"} className='text-base font-medium hover:text-orange-600'>Meals</Link>
                    </div>
                    <div className='flex gap-3'>
                        <button>Log In</button>
                        <button>Sign Up</button>
                    </div>
                </nav>
            </div>
        </div>
    );
};

export default Navbar;