import React from 'react';
import { useEffect, useState } from 'react';
import { FetchMealById } from '../services/mealtService';
import { useParams } from 'react-router-dom';

const MealDescription = () => {
	const [meals, setMeals] = useState(null);
	const { idMeal } = useParams();

	useEffect(() => {
        FetchMealById(idMeal)
            .then(data => {
                setMeals(data);
            })
            .catch(error => {
                console.error(error);
            });
    }, [idMeal]);
	if (!meals) {
		return <div>...loading</div>; 
	  }

	return (
		<div>
		<h1>{meals.strMeal}</h1>
		<img src={meals.strMealThumb} alt={meals.strMeal} />
		<p>{meals.strInstructions}</p>
	  </div>
	);
}
export default MealDescription;
