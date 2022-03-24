import React from 'react';
import { Card, Button } from 'react-bootstrap';
import './Meal.css'

const Meal = (props) => {
    const { strMeal, strArea, strMealThumb, strInstructions } = props.meal;
    const { handleDetailsButton } = props;
    return (
        <div>
            <Card className='shadow p-3 mb-5 bg-body rounded border-0' style={{ width: '18rem' }}>
                <Card.Img variant="top" src={strMealThumb} />
                <Card.Body>
                    <h2>{strMeal}</h2>
                    <h6>{strArea}</h6>
                    <Card.Text>
                        {strInstructions.slice(0, 100)}
                    </Card.Text>
                    <Button onClick={() => handleDetailsButton(props.meal)} className='details-button' variant="primary">Meal Details</Button>
                </Card.Body>
            </Card>
        </div>
    );
};

export default Meal;