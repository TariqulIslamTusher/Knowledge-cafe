import { useEffect, useState } from "react";

const CardBody = (props) => {

    const { user_image, published_date, person, description, reading_time } = props.data
    const handleWatchTime = props.handleWatchTime
    const handleBlog = props.handleBlog

    
    
    // try to toggle the bookmark button
    // const [cont, setCont] = useState(false)
    // let fill;
    // useEffect(()=>{
    //     setCont(true)
    //     if(cont== true){
    //         fill = 'black';
    //         setCont(false)
    //     } else{
    //        setCont(true)
    //        fill = 'none';
    //     }
    // },[setCart])

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
                        <h3>{reading_time} min to read</h3>
                        <button onClick={() => handleBlog(props.data)} className='btn-sm btn-circle'>
                            <svg xmlns="http://www.w3.org/2000/svg" fill='none' viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-10 font-bold">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M17.593 3.322c1.1.128 1.907 1.077 1.907 2.185V21L12 17.25 4.5 21V5.507c0-1.108.806-2.057 1.907-2.185a48.507 48.507 0 0111.186 0z" />
                            </svg>
                        </button>
                    </div>
                </div>

                <div className="card-actions">
                    <h1 className='font-bold text-5xl'>{description}</h1>
                    <a onClick={() => handleWatchTime(reading_time)} className='text-blue-900 mt-3 text-lg btn btn-outline bg-blue-300 font-semibold cursor-pointer active:text-red-900'>Mark as read</a>
                </div>
            </div>
        </div>
    );
};

export default CardBody;