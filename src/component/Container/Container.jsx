import React from 'react';
import Card from '../Card/Card';
import Bookmark from '../Bookmark/Bookmark';

const Container = (props) => {

    return (
        <div className='container mx-auto grid grid-cols-1 md:grid-cols-3 gap-6 mt-6 md:px-32'>

            <div className='md:col-span-2 '>
                {
                    props.datas.map(data => {
                        return (
                            <div>
                                <Card data={data}  handleBookmark={props.handleBookmark}></Card>
                            </div>
                        )
                    })
                }
            </div>
            <div className='md:col-span-1'>
                <Bookmark></Bookmark>
            </div>
        </div>

    );
};

export default Container;