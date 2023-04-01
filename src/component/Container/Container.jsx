import React, { useEffect, useState } from 'react';
import Card from '../Card/Card';
import Bookmark from '../Bookmark/Bookmark';

const Container = (props) => {
    // declaration of state for adding the selected blog in an new array
    const [cart, setCart] = useState([])
    // function for adding the blogs in an array
    const handleBlog =(data)=>{
        const newCart = [...cart, data]
        
        
        const toastCondition = cart.includes(data)
        
        if(toastCondition){
            return alert('hi this is me')
        } else{
            setCart(newCart)
        }
    }

    return (
        <div className='container mx-auto grid grid-cols-1 md:grid-cols-3 gap-6 mt-6 md:px-32'>

            <div className='md:col-span-2 overflow-y-scroll h-screen'>
                {
                    props.datas.map(data => {
                        return (
                            <div>
                                <Card 
                                    data={data} 
                                    handleBlog={handleBlog} 
                                    handleWatchTime={props.handleWatchTime}
 
                                ></Card>
                            </div>
                        )
                    })
                }
            </div>

            <div className='md:col-span-1'>
                <Bookmark 
                    watchTime={props.watchTime} 
                    cart={cart}
                    setCart={setCart}
                ></Bookmark>
            </div>
        </div>

    );
};

export default Container;