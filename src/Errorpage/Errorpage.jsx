import React from 'react';
import { Link } from 'react-router-dom';
import backgroundImage from "../assets/errorPic/brooke-lark-wMzx2nBdeng-unsplash.jpg"
import errorImage  from "../assets/errorPic/—Pngtree—error 404 page not found_5768129.png"

const Errorpage = () => {
    return (
        <section 
            className='flex items-center bg-cover h-screen p-16  bg-gray-100 text-gray-900'
            style={{ backgroundImage: `url(${backgroundImage})`, }}
        >
            <div className='container flex flex-col items-center justify-center px-5 mx-auto my-8'>
            <img src={errorImage} alt='Upper button' className='mr-2 rounded-full h-78 w-96' />
                <div className='max-w-md text-center'>
    
                    <Link to='/' className='btn border p-3 rounded-sm bg-green-500'>
                        Back to homepage
                    </Link>
                </div>
            </div>
        </section>
    );
};

export default Errorpage;