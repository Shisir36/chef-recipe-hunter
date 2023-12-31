import React, { useEffect, useState } from 'react';
import { useLoaderData, useParams } from 'react-router-dom';
import bgImage from "../../../assets/foodPic/brooke-lark-4J059aGa5s4-unsplash.jpg"
import RecipesCard from '../RecipesCard/RecipesCard';
import {  FaHamburger, FaHeart } from 'react-icons/fa';
const ChefRecipes = () => {
const recipes = useLoaderData();
const {id} = useParams()
const [chefData, setChefData] = useState('');
useEffect(()=>{
    fetch(`https://chef-recipe-hunter-server-shisir36.vercel.app/chef/${id}`)
    .then(res => res.json())
    .then(data =>setChefData(data))
},[]) 
return (
 <div>
    <div className="bg-cover bg-center hero " style={{ backgroundImage: `url(${bgImage})`}}>
    <div className="hero-overlay bg-opacity-50"></div>
  <div className="container mx-auto px-4 py-32 text-black">
    <div className="flex flex-col md:flex-row items-center justify-center gap-6 h-5/6">
      <div className="md:w-1/4 mb-4 md:mb-0">
        <img className="rounded-full md:h-80 md:w-80 w-64 h-64 border-4 border-white shadow-lg" src={chefData.chef_picture} alt="Chef image" />
      </div>
      <div className="md:w-3/4 md:pl-10 md:text-left text-center">
        <h1 className="md:text-5xl text-4xl font-bold mb-5 text-green-400 title">{chefData.chef_name}</h1>
        <p className="md:text-2xl text-xl text-white font-bold mb-6">{chefData.chef_bio}</p>
        <div className="flex flex-wrap justify-between items-center mb-6">
          <div className="w-full sm:w-1/2 md:w-1/3 mb-4 md:mb-0">
            <p className="md:text-3xl text-2xl text-green-400 title font-bold">Experience</p>
            <p className="md:text-2xl text-xl text-white font-semibold">{chefData.years_of_experience} Years</p>
          </div>
          <div className="w-full sm:w-1/2 md:w-1/3 mb-4 md:mb-0">
            <p className="md:text-3xl text-2xl text-green-400 title font-bold">Likes</p>
            <p className="md:text-2xl text-xl text-white font-semibold inline-flex items-center gap-1">{chefData.likes}<span><FaHeart className='text-red-600 text-center'></FaHeart></span></p>
          </div>
          <div className="w-full sm:w-1/2 md:w-1/3 mb-4 md:mb-0">
            <p className="md:text-3xl text-2xl text-green-400 title font-bold">Recipes</p>
            <p className="md:text-2xl text-xl text-white font-semibold inline-flex items-center gap-1">{chefData.number_of_recipes}<span><FaHamburger className='text-yellow-600 text-center'></FaHamburger> </span></p>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>

    <div>
        <h2 className='title md:text-5xl text-3xl text-center py-9'>Recipe Details <hr className=' border md:w-6/12 w-11/12 text-center mx-auto mt-6' /></h2>
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