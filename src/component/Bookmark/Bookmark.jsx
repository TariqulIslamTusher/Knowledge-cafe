import { useEffect, useState } from "react";


const Bookmark = (props) => {
    const watchTime = props.watchTime
    const cart = props.cart
    const [time, setTime] = useState(watchTime )

    useEffect(()=>{
            const usedTime = JSON.parse(localStorage.getItem('ReadMin'))
            setTime(usedTime)
    },[watchTime])

    return (
        <div className='container'>
            <div className='bg-blue-100 border-2 border-blue-800 mb-6 p-5 rounded-lg'>
                <h2 className='text-orange-900 text-2xl'>Spent time on read : {time}</h2>

            </div>
            <div id='blog' className='bg-blue-100 border-2 border-blue-800 p-4 rounded-xl'>
                <h1 className='text-2xl text-orange-900 bg-blue-100'>Bookmarked Blog: <span>{cart.length}</span></h1>
                {
                    cart.map(singleCart => <li>{singleCart.description}</li>)
                }
            </div>

        </div>
    );
};

export default Bookmark;