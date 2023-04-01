import React, { useEffect, useState } from 'react';
import Card from '../Card/Card';
import Bookmark from '../Bookmark/Bookmark';

const Container = (props) => {
    
    const [cart, setCart] = useState([])

    const handleBlog =(data) =>{
        cart.push(data)
        setCart(cart)
    }

    return (
        <div className='container mx-auto grid grid-cols-1 md:grid-cols-3 gap-6 mt-6 md:px-32'>

            <div className='md:col-span-2 overflow-y-scroll h-screen'>
                {
                    props.datas.map(data => {
                        return (
                            <div>
                                <Card data={data} handleWatchTime={props.handleWatchTime} handleBlog={handleBlog}></Card>
                            </div>
                        )
                    })
                }
            </div>

            <div className='md:col-span-1'>
                <Bookmark watchTime={props.watchTime} cart={cart}></Bookmark>
            </div>
        </div>

    );
};

export default Container;