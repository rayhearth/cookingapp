import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Cards from './Cards';
import Search from './Search';

const Cooking = () => {


    const [mealsData, setMealsData] = useState([])

    useEffect(() => {
        axios.get(`https://www.themealdb.com/api/json/v1/1/search.php?s=Arrabiata`)
            .then((res) => setMealsData(res.data.meals))
    }, [])

    return (
        <div className='cooking'>
            <div className="meal-container">
                {mealsData.map((meal) => (
                    <Cards key={meal.idMeal} meal={meal} />
                ))}
            </div>
        </div>
    );
};

export default Cooking;