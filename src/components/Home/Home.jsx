/* eslint-disable no-unused-vars */
import Categories from '../Categories/Categories';
import Meals from '../Meals/Meals';
import { useLoaderData } from 'react-router-dom';

const Home = () => {

    return (
        <div>
            <Categories></Categories>
            <Meals></Meals>
        </div>
    );
};

export default Home;