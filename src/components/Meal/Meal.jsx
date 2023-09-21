/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react';

const Meal = (props) => {
    const { meal } = props;
    return (
        <div className='rounded-lg p-4 text-center shadow-lg'>
            <img className='mx-auto rounded-lg w-full lg:h-[300px]' src={meal.strMealThumb} alt="" />
            <p className='mt-3 font-medium text-lg text-slate-500'>{meal.strMeal}</p>
            {/* <p>{meal.strInstructions}</p> */}
        </div>
    );
};

export default Meal;