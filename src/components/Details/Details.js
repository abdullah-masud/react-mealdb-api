import React from 'react';
import './Details.css'

const Details = (props) => {
    const { strMeal, strArea } = props.detail;
    return (
        <div>
            <div className='shadow p-3 mb-5 bg-body rounded border-0 mb-2 w-75 mx-auto p-2'>
                <h5>Name: {strMeal}</h5>
                <h5>Area: {strArea}</h5>
            </div>
        </div>
    );
};

export default Details;