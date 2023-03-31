import React, { useEffect, useState } from 'react';

const Bookmark = () => {
    const [ab, setAb] = useState([])
    useEffect(()=>{
        setAb(JSON.parse(localStorage.getItem('ReadMin')))
    },[setAb])
    return (
        <div className='container bg-yellow-100 p-5 rounded-lg'>
            <div className='bg-blue-100 border-2 border-blue-800 p-4 rounded-xl mb-6'>
                <h2 className='text-orange-900 text-2xl'>Spent time on read : {ab}</h2>
            </div>
            <div id='blog' className='bg-blue-100 border-2 border-blue-800 p-4 rounded-xl'>
                <h1 className='text-2xl text-orange-900 bg-blue-100'>Bookmarked Blog: <span>00</span></h1>
            </div>

        </div>
    );
};

export default Bookmark;