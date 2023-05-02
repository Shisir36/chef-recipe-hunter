import React from 'react';

const ChefDetails = ({chefData}) => {
  const {chef_picture,chef_name, years_of_experience,number_of_recipes,likes,chef_bio} = chefData
    return (
<div>
<div class="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl mt-10">
  <div class="md:flex justify-between">
    <div class="md:flex-shrink-0">
      <img class=" h-full md:w-72 object-cover" src={chef_picture} alt="Chef Picture"/>
    </div>
    <div class="p-8">
      <div class="uppercase tracking-wide text-2xl text-indigo-500 font-semibold">{chef_name}</div>
      <p class="mt-2 text-gray-500">Years of Experience:{years_of_experience}</p>
      <p class="mt-2 text-gray-500">Recipes:{number_of_recipes}</p>
      <p class="mt-2 text-gray-500">Likes:{likes}</p>
      <p class="mt-2 text-gray-500"></p>
      <div class="mt-6">
        <a href="#" class="inline-flex items-center justify-center px-4 py-2 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700">View Recipes</a>
      </div>
    </div>
  </div>
</div>
</div>

    );
};

export default ChefDetails;