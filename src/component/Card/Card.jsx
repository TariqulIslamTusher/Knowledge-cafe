import React from 'react';
import CardBody from './CardBody';

const Card = (props) => {
    const { id, person, authore, user_image, cover_image, published_date, title, description } = props.data
    console.log(props.data)
    return (
        <>
            <div className="card mx-auto gap-5 bg-base-100 shadow-xl">
                <figure><img className='w-full max-h-80' src={cover_image} alt="" /></figure>
                <CardBody data={props.data} ></CardBody>
            </div>
        </>
    );
};

export default Card;