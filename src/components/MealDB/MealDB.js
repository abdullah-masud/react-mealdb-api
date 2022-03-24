import React, { useEffect, useState } from 'react';
import './MealDB.css'
import { Col, Row } from 'react-bootstrap';
import Meal from '../Meal/Meal';
import Details from '../Details/Details';

const MealDB = () => {
    const [meals, setMeals] = useState([]);
    const [details, setDetails] = useState([]);

    useEffect(() => {
        fetch('https://www.themealdb.com/api/json/v1/1/search.php?s=a')
            .then(res => res.json())
            .then(data => setMeals(data.meals));
    }, [])

    const handleDetailsButton = (meal) => {
        const newMeal = [...details, meal];
        setDetails(newMeal);
    }


    return (
        <div>
            <div >
                <Row>
                    <Col className='text-center border px-0' sm={9}>
                        <h4 className='py-3'>All Meals</h4>
                        <div className='meal-container'>
                            {
                                meals.map(meal => <Meal
                                    key={meal.idMeal}
                                    meal={meal}
                                    handleDetailsButton={handleDetailsButton}
                                ></Meal>)
                            }
                        </div>
                    </Col>
                    <Col className='details-container' sm={3}>
                        <div className='details'>
                            <h4 className='py-3 text-center'>Details</h4>
                            {
                                details.map(detail => <Details
                                    key={detail.idMeal}
                                    detail={detail}
                                ></Details>)
                            }
                        </div>
                    </Col>
                </Row>
            </div>
        </div>
    );
};

export default MealDB;