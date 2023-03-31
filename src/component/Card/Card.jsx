import React from 'react';
import CardBody from './CardBody';

const Card = (props) => {
    const { id, person, authore, user_image, cover_image, published_date, title, description } = props.data
    console.log(props.data)
    return (
        <div>
            <div className="card w-full bg-base-100 shadow-xl">
                <figure><img className='w-full' src={cover_image} alt="" /></figure>
                <CardBody data={props.data} ></CardBody>
            </div>
        </div>
    );
};

export default Card;