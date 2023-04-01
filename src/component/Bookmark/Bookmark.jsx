import { useEffect, useState } from "react";


const Bookmark = (props) => {
    const watchTime = props.watchTime
    const cart = props.cart
    let setCart=props.setCart
    const [time, setTime] = useState('00')

    useEffect(()=>{
            const usedTime = JSON.parse(localStorage.getItem('ReadMin'))
            if(usedTime){
                setTime(usedTime)
            }
    },[watchTime])
    // reset function
    const reset =() =>{
        setTime('00')
        localStorage.clear('ReadMin')
        setCart([])
        // window.location.reload()
    }
    return (
        <div className='container'>
            <div className='bg-blue-100 border-2 border-blue-800 mb-6 p-5 rounded-lg'>
                <h2 className='text-blue-900 lg:text-2xl font-bold'>Spent time on read : {time}</h2>

            </div>
            <div id='blog' className='bg-blue-100 border-2 border-blue-800 p-4 rounded-xl'>
                <h1 className='lg:text-2xl text-orange-900 bg-blue-100 font-bold'>Bookmarked Blog: <span>{cart.length}</span></h1>
                {
                    cart.map(singleCart => <li className="md:text-xl p-3 bg-white my-2 rounded-xl">{singleCart.description}</li>)
                }
            </div>
            <div className="text-center">
                <button onClick={() => reset()} className="mx-auto text-sm lg:text-lg bg-red-100 text-red-950 rounded-xl p-3 btn mt-5 hover:text-white">Reset Bookmarks</button>
            </div>

        </div>
    );
};

export default Bookmark;