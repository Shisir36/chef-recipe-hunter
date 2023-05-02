import React, { useEffect, useState } from 'react';
import { useLoaderData, useParams } from 'react-router-dom';
import bgImage from "../../../assets/foodPic/ball-park-brand-DGHy9KgdTj0-unsplash.jpg"
import RecipesCard from '../RecipesCard/RecipesCard';
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
     <div className="bg-cover bg-center h-4/6" style={{ backgroundImage: `url(${bgImage})`, opacity: 0.8 }}>
      <div className="container mx-auto px-4 py-32 h-full text-black">
        <div className="flex flex-col md:flex-row items-center justify-center h-full">
          <div className="md:w-1/4 mb-4 md:mb-0">
            <img className="rounded-full h-72 w-72 border-4 border-white shadow-lg" src={chefData.chef_picture} alt="Chef image" />
          </div>
          <div className="md:w-3/4 md:pl-10">
            <h1 className="text-5xl font-bold mb-5 text-white">{chefData.chef_name}</h1>
            <p className="text-2xl text-black font-bold mb-6">{chefData.chef_bio}</p>
            <div className="flex flex-wrap justify-between items-center mb-6">
              <div className="w-full sm:w-1/2 md:w-1/3 mb-4 md:mb-0">
                <p className="text-3xl text-white font-bold">Likes</p>
                <p className="text-2xl text-gray-500">{chefData.likes}</p>
              </div>
              <div className="w-full sm:w-1/2 md:w-1/3 mb-4 md:mb-0">
                <p className="text-3xl text-white font-bold">Recipes</p>
                <p className="text-2xl text-gray-500">{chefData.number_of_recipes}</p>
              </div>
              <div className="w-full sm:w-1/2 md:w-1/3 mb-4 md:mb-0">
                <p className="text-3xl text-white font-bold">Experience</p>
                <p className="text-2xl text-gray-500">{chefData.years_of_experience}</p>
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