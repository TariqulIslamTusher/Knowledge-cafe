import React from 'react';
import CardBody from './CardBody';

const Card = (props) => {
    const {  cover_image } = props.data
    const  handleWatchTime= props.handleWatchTime


    return (
        <>
            <div className="card mx-auto gap-5 bg-base-100 shadow-xl border-2 border-orange-900 my-5">
                <figure><img className='w-full max-h-80' src={cover_image} alt="" /></figure>
                <CardBody 
                    data={props.data} 
                    handleWatchTime={handleWatchTime} 
                    handleBlog={props.handleBlog}
                ></CardBody>
            </div>
        </>
    );
};

export default Card;