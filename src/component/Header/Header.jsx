import React from 'react';

const Header = () => {
    return (
        <div className='shadow-xl my-2'>
            <div className="navbar bg-base-100 container mx-auto grid grid-cols-1 md:grid-cols-2 justify-center md:justify-between">
                <div className="flex-1">
                    <a className="btn btn-ghost normal-case text-4xl">Knowledge Cafe</a>
                </div>

                <div className='flex justify-end'>
                    <div className="flex-none">
                        <ul className="menu menu-horizontal px-1">
                            <li><a>Home</a></li>
                            <li><a>Blog</a></li>
                            <li><a>Log in</a></li>
                        </ul>
                    </div>

                    <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                        <div className="w-10 rounded-full">
                            <img src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTV8fGh1bWFufGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60" />
                        </div>
                    </label>
                </div>
            </div>
        </div>
    );
};

export default Header;