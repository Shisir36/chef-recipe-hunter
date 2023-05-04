import React from 'react';
import { FaHeart } from 'react-icons/fa';
import LazyLoad from 'react-lazy-load';
import { Link } from 'react-router-dom';

const ChefDetails = ({chefData}) => {
  const {chef_picture,chef_name, years_of_experience,number_of_recipes,likes,chef_bio} = chefData
    return (
<div class=" bg-white rounded shadow-md overflow-hidden md:max-w-2xl mt-10">
  <div class="md:flex justify-between w-full gap-10">
    <div>
      <LazyLoad height={300}>
      <img class=" h-full md:w-96 object-cover" src={chef_picture} alt="Chef Picture"/>
      </LazyLoad>
    </div>
    <div class="md:px-10 px-4 py-5 md:ml-9">
      <div class="uppercase tracking-wide text-2xl text-green-400 title">{chef_name}</div>
      <p class="mt-2 text-gray-500">Years of Experience: <span className=' font-bold'> {years_of_experience}</span></p>
      <p class="mt-2 text-gray-500">Recipes:<span className=' font-bold'> {number_of_recipes}</span></p>
      <p class="mt-2 text-gray-500 inline-flex items-center"><FaHeart className='text-red-600' /><span className=' font-bold'>  {likes}</span></p>
      <p class="mt-2 text-gray-500"></p>
      <div class="mt-6">
        <button>
        <Link to={`/ChefRecipes/ ${chefData.id}`} class="inline-flex items-center justify-center px-4 py-2 border border-transparent text-base font-medium rounded-md text-white bg-green-600 hover:bg-indigo-700">View Recipes</Link>
        </button>
      </div>
    </div>
  </div>
</div>
    );
};

export default ChefDetails;