import React from 'react';
import CardBody from './CardBody';

const Card = (props) => {
    const {  cover_image } = props.data
    const  handleBookmark= props.handleBookmark
    return (
        <>
            <div className="card mx-auto gap-5 bg-base-100 shadow-xl">
                <figure><img className='w-full max-h-80' src={cover_image} alt="" /></figure>
                <CardBody data={props.data}  handleBookmark={handleBookmark}></CardBody>
            </div>
        </>
    );
};

export default Card;