import React from 'react';
import Card from '../Card/Card';

const Container = (props) => {
    return (
        <div className='container mx-auto'>
            {
                props.datas.map(data => {
                    return (
                        <div>
                            <Card data={data}></Card>
                        </div>
                    )
                })
            }
        </div>
    );
};

export default Container;