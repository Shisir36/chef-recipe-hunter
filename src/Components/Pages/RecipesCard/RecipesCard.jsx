import React from 'react';

const RecipesCard = ({recipe}) => {
    const {name,ingredients,method,recipe_picture} = recipe
    return (
<div className="card w-96 bg-base-100 shadow-md mx-auto">
  <figure><img src={recipe_picture} alt="Shoes" /></figure>
  <div className="card-body">
    <h2 className="card-title">
      <div className="badge badge-secondary text-xl p-4">{name}</div>
    </h2>
    <div className="card-actions justify-between">
     <div>
        <h2 className='text-xl mb-3 font-bold'>ingredients:</h2>
      <div className="flex flex-col gap-3">
      {
      Object.values(ingredients).map((ingredient, index) => (
        <div key={index} className="badge badge-outline">{ingredient}</div>
      ))
    }
        <div className="badge badge-outline">Products</div>
      </div>
      </div>
      <p>{method}</p>
      <div className="flex flex-col items-end">
        <div className="text-gray-500 text-sm">Rating</div>
        <div className="badge badge-primary"></div>
      </div>
    </div>
  </div>
</div>

    );
};

export default RecipesCard;