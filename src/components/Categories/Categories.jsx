/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Category from '../Category/Category';

const Categories = (props) => {

    const { categoriesData } = useLoaderData();

    const loaderData = useLoaderData();

    const { categories } = typeof(categoriesData) === 'undefined' ? loaderData : categoriesData;

    return (
        <div className='container mx-auto'>
            <h2 className='font-bold text-lg mb-3'>Recipe Categories : { }</h2>
            <div className='grid grid-cols-1 md:grid-cols-3 lg:grid-cols-6 gap-4'>
                {
                    categories.map((category, idx) => <Category key={idx} category={category}></Category>)
                }
            </div>
        </div>
    );
};

export default Categories;