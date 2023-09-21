/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Meal from '../Meal/Meal';

const Meals = (props) => {

    const { mealsData } = useLoaderData();
    const loaderData = useLoaderData();

    const { meals } = typeof(mealsData) === 'undefined' ? loaderData : mealsData;
    //const { meals } = mealsData;
    
    return (
        <div className='container mx-auto'>
            <h2 className='font-bold text-lg mb-3 mt-6'>Trendy Meals</h2>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
                {
                    meals.map((meal, idx) => <Meal key={idx} meal={meal}></Meal>)
                }
            </div>
        </div>
    );
};

export default Meals;