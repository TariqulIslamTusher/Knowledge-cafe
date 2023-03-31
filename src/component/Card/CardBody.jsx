import React, { useEffect, useState } from 'react';

const CardBody = (props) => {
    const [bookmark, setBookmark] = useState([])
    useEffect( () => {
        
    },[])
    const { user_image, id, published_date, person, description } = props.data
    return (
        <div>
            <div className="card-body">
                <div className='card-container flex items-center sm:justify-between flex-col gap-4 sm:flex-row'>
                    <div className='flex items-center'>
                        <img src={user_image} className='w-12 h-12 rounded-full mr-3' alt="" />
                        <div>
                            <h3 className='font-bold'>{person}</h3>
                            <p>published in {published_date}</p>
                        </div>
                    </div>
                    <div className='flex gap-3'>
                        <h3>{id} min reqr to read</h3>
                        <button className='btn-sm btn-circle'>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M17.593 3.322c1.1.128 1.907 1.077 1.907 2.185V21L12 17.25 4.5 21V5.507c0-1.108.806-2.057 1.907-2.185a48.507 48.507 0 0111.186 0z" />
                            </svg>
                        </button>
                    </div>
                </div>

                <div className="card-actions">
                    <h1 className='font-bold text-5xl'>{description}</h1>
                    <a className='text-blue-700 text-lg cursor-pointer active:text-red-900'>Mark as read</a>
                </div>
            </div>
        </div>
    );
};

export default CardBody;