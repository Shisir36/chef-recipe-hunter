import React from 'react';
import { Link } from 'react-router-dom';
import {FaceFrownIcon } from '@heroicons/react/24/solid'

const Errorpage = () => {
    return (
        <section className='flex items-center h-screen p-16 bg-gray-100 text-gray-900'>
        <div className='container flex flex-col items-center justify-center px-5 mx-auto my-8'>
            <FaceFrownIcon className='w-40 h-40 text-yellow-500' />
            <div className='max-w-md text-center'>
                <h1 className='text-lg'>error</h1>
                <p className='text-2xl font-semibold md:text-3xl text-red-800 mb-8'>

                </p>
                <Link to='/' className='btn border p-3 rounded-sm bg-blue-300'>
                    Back to homepage
                </Link>
            </div>
        </div>
    </section>
    );
};

export default Errorpage;