import React from 'react';

const CardBody = (props) => {
    const {user_image, id, published_date, person} = props.data
    return (
        <div>
            <div className="card-body">
                    <div className='card-container flex items-center justify-between'>
                        <div className='flex items-center'>
                            <img src={user_image} className='w-12 h-12 rounded-full mr-2'  alt="" />
                            <div>
                                <h3 className='font-bold'>{person}</h3>
                                <p>published in {published_date}</p>
                            </div>
                        </div>
                        <div>
                            <h3>{id} min reqr to read</h3>
                            
                        </div>
                    </div>
                    
                    <div className="card-actions justify-end">
                        
                    </div>
                </div>
        </div>
    );
};

export default CardBody;