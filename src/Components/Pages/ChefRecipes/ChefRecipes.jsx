import React, { useEffect, useState } from 'react';
import { useLoaderData, useParams } from 'react-router-dom';
import bgImage from "../../../assets/foodPic/brooke-lark-08bOYnH_r_E-unsplash.jpg"
import RecipesCard from '../RecipesCard/RecipesCard';
import { FaCuttlefish, FaHeart } from 'react-icons/fa';
const ChefRecipes = () => {
const recipes = useLoaderData();
const {id} = useParams()
const [chefData, setChefData] = useState('');
useEffect(()=>{
    fetch(`http://localhost:5000/chef/${id}`)
    .then(res => res.json())
    .then(data =>setChefData(data))
},[]) 
return (
 <div>
    <div className="bg-cover bg-center" style={{ backgroundImage: `url(${bgImage})`, backgroundColor: "rgba(255, 255, 255, 0.8)" }}>
  <div className="container mx-auto px-4 py-32 text-black">
    <div className="flex flex-col md:flex-row items-center justify-center gap-6 h-5/6">
      <div className="md:w-1/4 mb-4 md:mb-0">
        <img className="rounded-full md:h-80 md:w-80 w-64 h-64 border-4 border-white shadow-lg" src={chefData.chef_picture} alt="Chef image" />
      </div>
      <div className="md:w-3/4 md:pl-10 md:text-left text-center">
        <h1 className="text-5xl font-bold mb-5 text-green-500 title">{chefData.chef_name}</h1>
        <p className="text-2xl text-gray-700 font-bold mb-6">{chefData.chef_bio}</p>
        <div className="flex flex-wrap justify-between items-center mb-6">
          <div className="w-full sm:w-1/2 md:w-1/3 mb-4 md:mb-0">
            <p className="text-3xl text-green-500 title font-bold">Experience</p>
            <p className="text-2xl text-gray-700 font-semibold">{chefData.years_of_experience} Years</p>
          </div>
          <div className="w-full sm:w-1/2 md:w-1/3 mb-4 md:mb-0">
            <p className="text-3xl text-green-500 title font-bold">Likes</p>
            <p className="text-2xl text-gray-700 font-semibold inline-flex items-center gap-1">{chefData.likes}<span><FaHeart className='text-red-600 text-center'></FaHeart></span></p>
          </div>
          <div className="w-full sm:w-1/2 md:w-1/3 mb-4 md:mb-0">
            <p className="text-3xl text-green-500 title font-bold">Recipes</p>
            <p className="text-2xl text-gray-700 font-semibold">{chefData.number_of_recipes}<span><FaCuttlefish className='text-red-600 text-center'></FaCuttlefish> </span></p>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>

    <div>
        <h2 className='title text-5xl text-center py-9'>Recipe Details</h2>
      <div className='grid md:grid-cols-3 gap-5'>
        {
            recipes.map( recipe => <RecipesCard key={recipe.id} recipe = {recipe}></RecipesCard> )
        }
      </div>
        
    </div>
</div>
    );
};

export default ChefRecipes;