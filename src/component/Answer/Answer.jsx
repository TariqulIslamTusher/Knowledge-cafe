import React from 'react';

const Answer = () => {
    return (
        <div className='mx-auto md:px-48 bg-gradient-to-b from-slate-200 to-white'>
            <div className='container mx-auto pt-6 px-2'>
                <div tabIndex={0} className="bg-emerald-100 text-xl collapse collapse-plus border border-base-300 rounded my-3">
                    <div className="collapse-title font-medium md:text-3xl">
                        Props va state
                    </div>
                    <div className="collapse-content bg-gradient-to-b from-emerald-200 to-white">
                        <p>props and State is the core concept of react. it has some feature. i have discus about it bellow</p>
                        <h1>Props</h1>
                            <ul className='list-decimal'>
                                <li>Props is read only.it can't change from user component</li>
                                <li>Props is unidirectional. it can pass from parent to chields.but cant pass from chields to parent</li>
                                <li>Props is quite smeller like HTML attribute. But not same</li>
                                <li>if props is change from parent component the chields component is render again</li>
                            </ul>
                        <h1>State</h1>
                            <ul className='list-decimal'>
                                <li>State can change on declared component or can change from it's child components</li>
                                <li>State is changed dynamically</li>
                            </ul>
                    </div>
                </div>
            </div>
            <div className='container  mx-auto px-2 '>
                <div tabIndex={0} className="bg-emerald-100 text-xl collapse collapse-plus border border-base-300 rounded my-3">
                    <div className="collapse-title font-medium md:text-3xl">
                        How does useState work?
                    </div>
                    <div className="collapse-content bg-gradient-to-b from-emerald-200 to-white">
                        <p>useState is used to manage the state of the component. it is a functional component. it is build in huck of react. when cll useState Function it return a array of contain 2 array elements one is value and the other one is a function. and when calling useState function we can pass a default value.we can't update the value directly. to update the value we need to use the second element of the array which is a function. this function parameter value is updated value.</p>
                    </div>
                </div>
            </div>
            <div className='container mx-auto px-2 '>
                <div tabIndex={0} className="bg-emerald-100 text-xl collapse collapse-plus border border-base-300 rounded my-3">
                    <div className="collapse-title font-medium md:text-3xl">
                        Purpose of useEffect other than fetching data
                    </div>
                    <div className="collapse-content bg-gradient-to-b from-emerald-200 to-white">
                        <p>useEffect is use for side effects. Side effect means work outside of react virtual DOM. like fetching data from database, Enter in Browser DOM, Window object etc.</p>
                    </div>
                </div>
            </div>
            <div className='container mx-auto px-2 '>
                <div tabIndex={0} className="bg-emerald-100 text-xl collapse collapse-plus border border-base-300 rounded my-3">
                    <div className="collapse-title font-medium md:text-3xl">
                        How does react work?
                    </div>
                    <div className="collapse-content bg-gradient-to-b from-emerald-200 to-white">
                        <p>Here's a high-level overview of how React works under the hood:</p>
                        <ul className='list-decimal'>
                            <li>React creates a Virtual DOM tree based on the components and their state/props.</li>
                            <li>React then calculates the most efficient way to update the actual DOM, minimizing the number of changes that need to be made.using Diff Algorithm</li>
                            <li>Finally, React updates the actual DOM with the changes</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Answer;