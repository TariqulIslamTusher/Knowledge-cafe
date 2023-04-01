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
                <h2 className='text-orange-900 text-2xl'>Spent time on read : {time}</h2>

            </div>
            <div id='blog' className='bg-blue-100 border-2 border-blue-800 p-4 rounded-xl'>
                <h1 className='text-2xl text-orange-900 bg-blue-100'>Bookmarked Blog: <span>{cart.length}</span></h1>
                {
                    cart.map(singleCart => <li>{singleCart.description}</li>)
                }
            </div>
            <div className="text-center">
                <button onClick={() => reset()} className="mx-auto text-xl bg-red-100 text-red-950 rounded-xl px-5 py-3 btn mt-5 hover:text-white">Reset Bookmarks</button>
            </div>

        </div>
    );
};

export default Bookmark;