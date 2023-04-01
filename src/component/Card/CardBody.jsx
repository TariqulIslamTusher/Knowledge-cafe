import { useEffect, useState } from "react";


const CardBody = (props) => {

    const { author_image, published_date, author, description, reading_time } = props.data
    const handleWatchTime = props.handleWatchTime
    const handleBlog = props.handleBlog

    return (
        <div>
            <div className="card-body">
                <div className='card-container flex items-center sm:justify-between flex-col gap-4 sm:flex-row'>
                    <div className='flex items-center'>
                        <img src={author_image} className='w-12 h-12 rounded-full mr-3' alt="" />
                        <div>
                            <h3 className='font-bold'>{author}</h3>
                            <p>published in {published_date}</p>
                        </div>
                    </div>
                    <div className='flex gap-3 items-center'>
                        <h3>{reading_time} min read</h3>
                        <button onClick={() => handleBlog(props.data)}>
                            <svg xmlns="http://www.w3.org/2000/svg" fill='none' viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-10 h-10 font-bold">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M17.593 3.322c1.1.128 1.907 1.077 1.907 2.185V21L12 17.25 4.5 21V5.507c0-1.108.806-2.057 1.907-2.185a48.507 48.507 0 0111.186 0z" />
                            </svg>
                        </button>
                    </div>
                </div>

                <div>
                    <h1 className='font-bold text-xl md:text-2xl lg:text-4xl'>{description}</h1>

                    <div className="text-text-muted my-3 flex gap-4 w-6/12">
                        <p>#beginners</p>
                        <p>#programming</p>
                    </div>

                    <a onClick={() => handleWatchTime(reading_time)} className='text-blue-900 mt-3 md:text-lg btn btn-outline bg-blue-300 font-semibold cursor-pointer active:text-red-900'>Mark as read</a>
                </div>
            </div>
        </div>
    );
};

export default CardBody;