import React from 'react';
import { useEffect, useState } from 'react';
import { FetchMealByFirstLetter } from '../../services/mealtService';
import MealPreviw from '../mealPreview';
import './index.css';

const MealPreviwGrid = () => {
	const [letter, setLetter] = useState('b');
	const [meals, setMeals] = useState([]);

	useEffect(() => {
        FetchMealByFirstLetter(letter)
            .then(data => {
                setMeals(data);
            })
            .catch(error => {
                console.error(error);
            });
    }, [letter]);

	return (
		<div className='meal-grid'>
		{meals.map(meal => (
			<MealPreviw key={meal.idMeal} meal={meal} />
		))}
		</div>
	);
};

export default MealPreviwGrid;
