/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react';

const Category = (props) => {
    const { category } = props;
    return (
        <div className='rounded-lg p-4 text-center shadow-lg'>
            <img className='mx-auto rounded-lg w-full' src={category.strCategoryThumb} alt="" />
            <p className='mt-3 font-medium text-lg text-slate-500'>{category.strCategory}</p>
        </div>
    );
};

export default Category;